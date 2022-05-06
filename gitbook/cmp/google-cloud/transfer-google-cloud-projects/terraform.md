# Terraform

To switch billing for projects that are managed via Terraform, you will have to give the Terraform service account a _billing user_ permission on the DoiT billing account and set/replace the _billing_account_ value in your script.

## Grant permission

{% hint style="info" %}

To add the Terraform service account as Billing User, you should be a Billing Account Administrator for the DoiT Billing Account.

See also:

- [Overview of Cloud Billing roles in IAM](https://cloud.google.com/billing/docs/how-to/billing-access#overview-of-cloud-billing-roles-in-cloud-iam)
- [Update Cloud Billing permissions](https://cloud.google.com/billing/docs/how-to/billing-access#update-cloud-billing-permissions)

{% endhint %}

To grant permission for projects that are managed by Terraform, follow these steps:

1. Sign in to the [Google Cloud Console](https://console.cloud.google.com/?_ga=2.46935335.1241116962.1634885894-310662435.1627993656).

2. Open the Cloud Console Navigation menu, and then select **Billing**.

   If you have more than one cloud billing account, do one of the following:

   &rarr; To manage Cloud Billing for the current project, select Go to linked billing account.

   &rarr; To locate a different Cloud Billing account, select Manage billing accounts and then choose the account that you want to manage.

   ![A screenshot of the You have multiple billing accounts message](../../.gitbook/assets/gcp-you-have-multiple-billing-accounts.png)

3. In the Billing navigation menu, click **Account management**.

   ![A screenshot of the Billing menu](../../.gitbook/assets/gcp-terraform-billing-menu.png)

4. Use the **Permissions panel** to edit permissions for the selected Cloud Billing account. If the panel isn't already visible, click `SHOW INFO PANEL` to open it.

5. Click **Add Principal**

   ![A screenshot showing the location of the ADD PRINCIPAL button](../../.gitbook/assets/gcp-add-principal-button.png)

6. Input the terraform service account as **New Principal** and select **`Billing Account User`** role, then Save.

   ![A screenshot of the Add principals and roles form](../../.gitbook/assets/gcp-add-principals-and-roles-form.png)

{% hint style="info" %}

**Default Billing Account**

If an identity (in this case the terraform service account) only has access to a single billing account, GCP will use that as the default \*\*`billing_account`\*\*value in Terraform. You could use this behavior to ensure DoiT Billing Account is selected as the default by removing the Terraform service account's permission to any other billing accounts and/or explicitly set the DoiT Billing Account ID on your Terraform script. See steps below.

{% endhint %}

## Set/Replace value for `billing_account`

As noted on Terraform documentation for Google Cloud Platform `google_project`, one of the arguments supported is **`billing_account`**. To associate the projects, simply set or replace its value with your DoiT Billing Account ID.

Example:

```javascript
resource "google_project" "my_project" {
  name       = "My Project"
  project_id = "your-project-id"
  org_id     = "1234567"
  billing_account = "DoiT-Billing-Account-ID"
}
```

{% hint style="info" %}

See also:

- [Terraform: Google Cloud Platform `google_project`](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/google_project#billing_account)

{% endhint %}
