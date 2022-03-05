---
description: How to analyze cloud spend that pre-dates when you started using the CMP
---

# Import Historical Data

## Overview

This feature enables you to upload all your historical Google Cloud billing data into DoiT Cloud Management Platform (CMP) to immediately analyze your cloud spend and promptly identify optimization opportunities through Cloud Analytics, BigQuery Lens, and other CMP features.

To get started, first, you need to ensure that you have a Service Account that connects your Google Cloud Organization to CMP. Then, you'll have to grant two additional required permissions.

## Identify the service account

Within the CMP, select the gear icon (_Settings_) from the top navigation bar, then select _Google Cloud_ under _Cloud settings_. The CMP will take you to the Google Cloud settings screen:

![A screenshot showing the _Google Cloud_ settings screen](../.gitbook/assets/cmp-google-cloud-settings.png)

If you do not have a service account configured yet, you will need to [create a service account](connect-google-cloud-service-account.md) before you can continue.

Select your desired service account, copy the service account email, and proceed to grant the required permissions (see next section).

## Grant the required Permissions

{% hint style="info" %}
You need to have the appropriate IAM role/permission in GCP to grant the required permissions to the service account
{% endhint %}

> **BigQuery Data Viewer role**

1. From GCP, navigate to the BigQuery Console and open the **dataset** where the billing data is stored, then click "**Share dataset**"
2. In the Dataset Permissions tab, click "**Add Member**" and paste the **service account** **email** that was linked to CMP as identified in [**Step 1**](import-historical-billing-data.md#step-1-identify-the-service-account-linked-to-cmp).
3. Click "**Select a Role**" highlight BigQuery then choose **BigQuery Data Viewer**
4. Click "**Add**"
5. Click "**Done**"

![A screenshot showing the location of the Share Dataset option](../.gitbook/assets/gcp-share-dataset-button.png)

![A screenshot showing the process of granting the BigQuery Data Viewer role](../.gitbook/assets/gcp-grant-bigquery-role.png)

> **Grant the bigquery.jobs.create permission**
>
> Depending on the features initially enabled from the process [Connect Google Cloud Service Account](https://help.doit-intl.com/google-cloud/connect-google-cloud-service-account), you may already have this permission granted to the role. Follow the steps below to verify / add the permission to the project.

1. From the GCP console, select your **organization** from the dropdown options
2. On the navigation menu, go to "IAM & Admin" then select "**Roles**"
3. Click on the role "**DoiT CMP Service Account**"
4. Check if **bigquery.jobs.create** is included in the assigned permissions, if yes, no further action is needed since these permissions will be inherited by the projects
5. If bigquery.jobs.create permission is not yet added, click on "**Edit Role**"
6. Click "**Add Permissions**"
7. Filter by **"Permission : bigquery.jobs.create**" and check the box for this permission
8. Click "**Add**"

![A screenshot showing how to select an organization, access the IAM & Admin menu item, and then select Roles](../.gitbook/assets/gcp-iam-admin-select-roles.png)

![A screenshot showing the location of the service account listing](../.gitbook/assets/gcp-services-account-listing.png)

![A screenshot showing the location of the Edit Role option and the bigquery.jobs.create permission listing](../.gitbook/assets/gcp-edit-role-permission-listing.png)

![A screenshot showing the Add Permissions option, a list of permissions, and the Add button](../.gitbook/assets/gcp-add-permissions.png)

## Link your Google Cloud Direct Billing Account

{% hint style="info" %}
Required Permission: **Assets Manager**
{% endhint %}

Within the CMP, select _Billing_ from the top navigation bar and then select _Assets_. The CMP will take you to the _Assets_ page.

From the _Assets_ page, select _Google Cloud_ from the left-hand navigation to access the Google Cloud assets page:

![A screenshot showing the Google Cloud assets page](../.gitbook/assets/cmp-assets-google-cloud.png)

From the Google Cloud assets page, select arrow next to the _New Billing Account_ button, then select _Link Direct Account_ from the drop-down menu that appears. Finally, select the button a second time (which should now read _Link Direct Account_).

The CMP will open a modal dialog:

![A screenshot showing the _Link Direct Account_ modal dialog](../.gitbook/assets/cmp-assets-google-cloud-link-direct-account.png)

To import your historical billing data into the CMP, enter the following:

* Billing Account ID &mdash; For example `01CF51-9FDB87-7894FD`
* Source Project &mdash; Enter the _Project ID_
* Source Dataset &mdash; Enter the _Dataset ID_

When you are done, select _Import_ to continue.

The CMP will add a new card to your Google Cloud assets page with import status information:

![A screenshot showing the new Google Cloud card with a "Processing" status](../.gitbook/assets/cmp-google-cloud-card-processing.png)

![A screenshot showing the new Google Cloud card with a "Success" status](../.gitbook/assets/cmp-google-cloud-card-success.png)
