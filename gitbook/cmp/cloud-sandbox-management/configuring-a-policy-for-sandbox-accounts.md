---
description: >-
  Policies enable you to automate governance of sandbox accounts created by your
  developers.
---

# Configuring Sandbox Policy

Google Cloud Sandbox for Organizations is the easiest way for companies to set up and manage Google Cloud sandboxes. Through the Cloud Management Platform, you'll be able to enable your developers to create a sandbox, monitor sandboxes from a centralized hub, and have one-click access to sandbox projects for deeper dives.

Set up a Google Cloud Sandbox Policy to enforce rules which automate sandbox management.

With a sandbox policy, you can:

- Set up sandbox budgets
- Get alerts or automatically disable billing when a budget is hit
- Limit the number of sandboxes per user
- Connect all sandboxes to your Google Cloud billing account, organization, and IAM folder
- Give all sandboxes a stable naming convention

_To create Google Cloud Sandbox Accounts, you must verify that a Google Cloud service account was successfully configured. You can read more on how to configure your Google Cloud service account at [Connect Your Google Cloud Organization_](../google-cloud/connect-google-cloud-service-account.md).\_

{% hint style="info" %}
Required Permission: **Sandbox Admin**
{% endhint %}

Before users can create a sandbox account, the Sandbox Admin needs to configure a policy. Without a configured policy, users cannot create a sandbox, as the policy defines how a sandbox is created.

To begin, click the 'Sandbox Accounts' icon on the left-hand side of the page. Once you're at the Sandbox Accounts page, click on 'Configure Policy', located on the right-hand side of the page.

![A screenshot of an empty _Sandbox accounts_ screen](../.gitbook/assets/cmp-sandbox-accounts-empty.png)

A notification will pop up informing you that the sandbox policy doesn't guarantee you won't exceed the budget. Click on 'Accept' to proceed.

![A screenshot showing the location of the Sandbox Policy modal dialog Accept button](../.gitbook/assets/cmp-sandbox-policy-1.png)

Complete the Sandbox Management Policy form:

- GCP Billing Account
- Organization
- IAM folder
- Budget
- Sandboxes per User &mdash; 10 maximum
- Sandbox Name Prefix
- Budget Type &mdash; One Time or Monthly
- End of Budget Action &mdash; Send Alert or Disable Billing

![A screenshot showing the Sandbox Policy modal dialog](../.gitbook/assets/cmp-sandbox-policy-2.png)

The Sandbox Admin can disable the policy to prevent the creation of additional sandboxes. This action will not disable any preexisting sandboxes. Click on 'Update Policy', and locate the disable/enable button. To finish, click 'Save'.

To learn more about how to create sandbox environments in the CMP, see [Creating Google Cloud Sandbox](create-gcp-sandbox-accounts.md).

View the bite-sized video below for a closer look at setting up your Cloud Sandbox policy and creating Cloud Sandboxes.

{% embed url="https://www.loom.com/share/2e2adffc48464c0189b87e4750e7b7d3?sharedAppSource=team_library" %}
