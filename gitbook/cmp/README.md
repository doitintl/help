---
description: An overview of DoiT International's Cloud Management Platform
---

# CMP Overview

DoiT International's _Cloud Management Platform_ (CMP) helps the developers and system administrators at digital-native companies improve cloud operations, maintain security, control cost, and ensure governance of its cloud estate.

The CMP has five strategic pillars:

* [Cloud analytics](./#cloud-analytics)
* [Cloud cost optimization](./#cloud-cost-optimization)
* [Cloud enablement](./#cloud-enablement)
* [Cloud productivity](./#cloud-productivity)
* [Cloud governance](./#cloud-governance)

In this document, we'll explain. briefly go over each of the main capabilities you have access to in the CMP, along with links to other articles for each feature if you're interested in doing a deeper dive.

## Summary

The following table offers a brief summary of our support for [Google Cloud Platform](https://cloud.google.com/gcp) (GCP), [Amazon Web Services](https://aws.amazon.com) (AWS), and [Microsoft Azure](https://azure.microsoft.com):

| Feature                                                              | GCP                                                      | AWS                                | Azure     |
| -------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------- | --------- |
| **CloudOps**                                                         |                                                          |                                    |           |
| [Consulting and support](services/consulting-support/)               | Yes                                                      | Yes                                | Yes       |
| [Cloud known issues](services/consulting-support/cloud-incidents.md) | Yes                                                      | Yes                                | No        |
| [Sandboxes](./#cloud-sandboxes)                                      | Yes                                                      | No                                 | No        |
| [Governance](./#cloud-governance)                                    | Yes                                                      | Yes                                | No        |
| **Costs analysis and optimization**                                  |                                                          |                                    |           |
| Lenses                                                               | [BigQuery Lens](dashboards/bigquery-lens.md),<br>GKE Lens| [AWS Lens](dashboards/aws-lens.md) | No        |
| [Cost history widgets](dashboards/widgets-overview.md)               | Yes                                                      | Yes                                | Yes       |
| [Cloud analytics](./#cloud-analytics)                                | Yes                                                      | Yes                                | No        |
| [Costs anomalies](./#cost-anomalies)                                 | Yes                                                      | Yes                                | No        |
| FlexSave                                                             | Yes                                                      | [Yes](flexsave/overview.md)        | No        |
| [EC2 Spot Scaling](spot-scaling/overview.md)                         | N/A                                                      | Yes                                | N/A       |

## Cloud analytics

### Reports

Cloud Reports give you instant visibility into your Google Cloud and AWS costs without having to spend agonizing hours manually scanning through cloud bills.

* Analyze cloud spend to identify optimization opportunities.
* [Build customized reports](cloud-analytics/create-cloud-report/) and [share](cloud-analytics/sharing-cloud-reports.md) them with others.
* Monitor costs on the go from your phone.
* [Detect trends](cloud-analytics/trend-analysis.md) in your cloud usage
* [Forecast your cloud spend](cloud-analytics/forecasting.md) across all time ranges and any cloud services
* Cross-check your SUD/CUD credits with by-the-hour reporting.

{% embed url="https://www.loom.com/share/3bb89b9c624a4a52a2ecfbb61a56b4b8" %}

### Cost attributions

Attributions are a flexible way to group resources and their associated costs, helping you understand the cloud costs and relate them to the business in your Cloud Reports.

You may have various components of your application(s) spread across different projects, using different services. Attributions allow you to combine everything into something coherent.

{% embed url="https://www.loom.com/share/8d36dbd796c84d51a26b3f836226c883?sharedAppSource=team_library" %}

### Cloud cost optimization

## Rightsizing for Google Cloud

When you create an instance in Google Cloud and it is under-utilized, you are paying more than you should as a result of idle resources.

With Instance Rightsizing for Google Cloud, you will:

* Get notified of idle resources across _all_ projects, and potential savings from rightsizing.
* [Identify and delete and/or modify idle VMs](dashboards/rightsizing-for-google-cloud.md) in two clicks.
* Never pay for underutilized Google Compute instances again.

{% embed url="https://www.loom.com/share/cecfc1a7f3d84240a5be922e27c0ac56?sharedAppSource=team_library" %}

### FlexSave

Purchasing compute commitments &mdash; Reserved Instances (RIs) or Savings Plans (SPs) for AWS; Committed Use Discounts (CUDs) for Google Cloud &mdash; is a great way for you to reduce your compute costs for stable, predictable workloads.

However, getting compute commitments _just right_ and then managing them is an extremely manual, never-ending process. FlexSave automates this for you while maximizing your compute discounts.

FlexSave works by analyzing your workloads, seeing which ones aren't covered by compute commitments like CUDs, RIs, or Savings Plans. Then, with the click of a button, it assigns reserved compute resources from DoiT's own wholesale inventory to optimally cover them, continuously monitoring for any changes in needs.

See how it works in the video below:

{% embed url="https://www.loom.com/share/b3a232a312c24735aead19d02df4c50f" %}
FlexSave demo for Google Cloud and AWS
{% endembed %}

## BigQuery Lens

As powerful as BQ is, it comes at a high cost depending on your analysts' behavior and how your BigQuery architecture is set up. Adding on to this, trying to identify BigQuery resource inefficiencies without knowing _what_ you're looking for can be a huge time-suck.

As a result, we created the [BigQuery Lens Dashboard](dashboards/bigquery-lens.md), your Swiss Army knife for highlighting inefficiencies in your team's BigQuery usage.

It analyzes your team's BigQuery behavior, aggregate information, and display the most important statistics for you. Unlike alternative solutions and methods, BigQuery Lens Dashboard brings important information TO you, without you having to configure anything.

Below you will see the widgets of the dashboard that provide you with insights into your organization's BigQuery usage statistics.

One important aspect of the BigQuery Lens Dashboard is the Recommendations widget, which offers smart recommendations around the nature of how your datasets, tables, and queries are structured.

Each recommendation category comes with further details on how to act on each recommendation.

{% embed url="https://youtu.be/7r1WfwnBAA4" %}

## Cloud enablement

### Cloud sandboxes

Cloud sandboxes (or DCEs &mdash; disposable cloud environments) offer engineering teams a safe and controlled environment to run experiments, test, and build out new features without worrying about impacting production infrastructure. While easy, simply creating a new Google Cloud project cannot be considered a "complete" solution due to the lack of built-in budget management, self-service for developers, and governing policies.

Cloud Sandbox for Google Cloud gives admins and developers the governance and autonomy they both need, respectively, all while connecting to their Google Cloud Organization.

First, [create a sandbox policy](cloud-sandbox-management/configuring-a-policy-for-sandbox-accounts.md) to automate sandbox management. With a policy set up, you can:

* Connect to your Google Cloud billing account, organization, and IAM folder.
* Set sandbox budgets.
* Get alerts when a budget is hit, or automatically disable the billing.
* Limit the number of sandboxes per user.
* Give your sandbox names a stable naming convention.

Once a policy is created, developers are free to [create cloud sandbox environments](cloud-sandbox-management/create-gcp-sandbox-accounts.md) themselves. No more submitting tickets just to get a new environment provisioned by an SRE. Finally, when sandboxes are up and running, you can monitor them all from a central hub.

{% embed url="https://www.loom.com/share/2e2adffc48464c0189b87e4750e7b7d3?sharedAppSource=team_library" %}

### Cloud quota monitoring

Every cloud provider has resource quotas for things like VPCs, CPU cores, and more. If you'd like to change that quota, you can request more, and typically cloud vendors will approve it. However, this takes hours to days.

However, sometimes your quota limits can, without warning, be hit by a surge of demand that causes you to hit those quotas. When this happens, you're forced to wait for your ticket to be addressed.

With Quota Monitoring for [Google Cloud](google-cloud/google-cloud-quotas.md) and [AWS](amazon-web-services/aws-quotas.md) you can stay on top of your cloud quotas with proactive monitoring. You'll get notified when you're approaching quotas.

This way, you'll keep services always running by adjusting limits ahead of time.

### Cost anomalies

With so many moving parts in the cloud, it's critical to keep a finger on the pulse of your costs. However, unless IT regularly monitors cloud spend, sudden spikes in resource costs can remain undetected for weeks &mdash; until the monthly bill arrives.

As a result, critical staff resources are wasted manually monitoring for and identifying the scope & source of problems.

[Cloud cost anomaly detection](anomaly-detection/cloud-anomalies.md) offers end-to-end **autonomous monitoring** of spikes in your AWS & Google Cloud usage & billing, seamlessly, across all your projects and services.

Available to DoiT customers right from the CMP, it also offers:

* Context-aware detection that treats each Google Cloud service uniquely.
* Advanced alerting that goes beyond static budgets & thresholds
* Fine-tune alerts by training them with your direct feedback.
* Real-time analysis of workload activity

{% embed url="https://www.youtube.com/watch?v=h6V7XfhsdmY&list=PLEBxNMZ7Mu3_hmB2I2LXcDSYt1SXcjwMz&index=1" %}

### Cloud support and advisory

As a DoiT International customer, you have access to 80+ battle-tested senior cloud engineers around the globe with over 200 certifications between them.

Within the CMP you can:

* Create [consulting and support requests](services/consulting-support/)
* [Escalate](services/consulting-support/escalate.md) support requests
* [Share](services/consulting-support/ticket-sharing.md) support requests with others
* Get access to exclusive [training](services/training.md), [professional services](services/proserv.md), and [perks](services/perks.md)

{% embed url="https://www.loom.com/share/ec2e0bca53fc46ef80061dd96be2f1a0?sharedAppSource=team_library" %}

{% embed url="https://www.loom.com/share/9ff183270cb84e32817818589a80d37e?sharedAppSource=team_library" %}

## Cloud productivity

### superQuery

[superQuery](http://web.superquery.io) is a web-based IDE that enables you to leverage BigQuery, AWS Athena, and DynamoDB at peak efficiency. With superQuery, you get top-notch capabilities for:

* Query Management with [Tabs](https://help.superquery.io/superquery-editor/query-tabs) and [Boards](https://help.superquery.io/superquery-editor/organizing-queries)
* Collaboration
* [Ad-hoc Visualization](https://help.superquery.io/superquery-editor/charts)
* [Enhanced Caching](https://help.superquery.io/superquery-editor/tab-settings#cache-preference)
* Git functionality support
  * [GitHub repository](https://app.gitbook.com/@doitintl/s/superquery-docs/git-integrations/connect-github) and [GitHub organization](https://app.gitbook.com/@doitintl/s/superquery-docs/git-integrations/connect-github-org) support
  * [GitLab support](https://app.gitbook.com/@doitintl/s/superquery-docs/git-integrations/connect-gitlab)

As a DoiT International customer, you get unlimited superQuery seats and access to superQuery at no additional cost, and can quickly access it from the CMP.

## Cloud governance

### Asset management

CMP gives you complete self-service management of assets across Google Cloud, AWS, G Suite, Azure, and Office 365.

From your Asset Management screen, you can:

* View all cloud subscriptions in one place.
* [Create a new Google Cloud Billing Account](google-cloud/create-google-cloud-billing-account.md) and/or an [AWS account](amazon-web-services/create-an-aws-account.md).
* [Invite an existing AWS account](amazon-web-services/invite-existing-aws-account.md)
* [Purchase additional seats for G Suite](g-suite-and-workspace/purchasing-g-suite-licenses.md) and/or [Office 365](microsoft-office-365/purchasing-office-365-licenses.md) yourself.
* Automate subscription management with [auto-provisioning](g-suite-and-workspace/configure-auto-increase-for-google-workspace-subscriptions.md) for G Suite, guaranteeing there is an open seat at all times.
* [Tag Assets](assets-and-contracts/tag-assets.md) for classification and invoicing purposes (e.g. team name, cost center, location, etc.).

Additionally, you can view your order history of all licenses and subscriptions across all of your cloud products.

### Advanced billing

CMP gives you capabilities unavailable in Google Cloud or AWS to customize _precisely_ how you'd like to be billed via Billing Profiles, Invoices, and Invoice Buckets.

[**Billing Profiles**](invoices-and-payments/setting-up-a-new-billing-profile.md) are for when your company has different entities requiring separate invoices. For instance, you may use a different payment method or currency depending on the entity.

In the CMP, customers can create as many Billing Profiles as required, per their company's needs.

Additionally, whereas with Google Cloud or AWS you can only pay with a credit card, DoiT International customers have more options for customizing the payment method for their Billing Profile(s) including Credit Card, Wire, Bill.com, and ACH.

[**Invoices**](invoices-and-payments/managing-invoices.md) across all cloud platforms and their current statuses can be easily accessed using the CMP.

From the Invoices page, you can:

* Click on an invoice to view a detailed breakdown.
* Download invoices.
* Sort invoices by billing profile, cloud service, date, etc.
* Get an at-a-glance look at the invoice status, the product it's referencing, and the total/balance.

Any tags placed on assets will also appear in invoices so you can more easily identify invoice items.

[**Invoice Bucketing**](invoices-and-payments/changing-invoice-settings.md) lets you create custom "buckets" and assign specific assets to those buckets.

This is especially useful when you have different cost centers such as R\&D or Operations using different assets and want to bill them separately.

With invoice buckets, you will receive separate invoices for each invoice bucket, billed to the billing profile it is associated with.

[Go here](invoices-and-payments/managing-invoices.md) for the full list of your billing and payment-related capabilities.

### Contract management

Via the Contracts page, you get self-service access to all cloud contracts you are being billed for through DoiT International.

### User and role management

Use User Management to:

* [Add colleagues](user-management/creating-a-new-user.md) to your CMP team.
* Management Billing Profile assignments.
* Configure notifications for alerts like payment reminders, new invoices, and more.
* [Set up and grant roles](user-management/manage-roles.md) that give access to various CMP features.

### Managed cloud support

Within the CMP you can resolve your cloud issues quickly with hyper-responsive and unlimited support from DoiT International &mdash; at no extra cost.

* [Open tickets](services/consulting-support/) with experienced Cloud Architects and Engineers.
* View open or historical tickets and their statuses.
* [Share tickets](services/consulting-support/ticket-sharing.md) with other team members.
* Stay up to date on any [known issues](services/consulting-support/cloud-incidents.md) across all clouds you use.

## Contribute

{% hint style="info" %}
You can request changes to articles or report issues via our [public GitHub repository](https://github.com/doitintl/cmp-docs) by submitting a pull request or creating an issue.
{% endhint %}
