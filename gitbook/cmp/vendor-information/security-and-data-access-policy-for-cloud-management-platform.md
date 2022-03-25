---
description: Security and Data Access Policy for Cloud Management Platform
---

# CMP Data Access Policy

This document outlines what customer data Cloud Management Platform accesses, why, what data is stored, and how we do that. **If you're not using DoiT Cloud Management Platform for the following features, this article doesn't apply.**

* Sandboxes for Google Cloud
* Google Cloud Rightsizing
* Google Kubernetes Engine Metering
* BigQuery Lens
* Google Cloud and/or AWS Proactive Quota Monitoring
* AWS ASG Optimizer

**TL;DR:** We only access data required for Cloud Management Platform (CMP) functionality. We store and handle your data in a secure way, encrypted in transit and at rest. We do not provide the data to any 3rd party, with the exceptions required for core CMP functionality and listed below.

## What we access

The list below denotes all permissions we require to your Google Cloud Organization and why.

{% hint style="info" %}
_While this provides us permissions to read info about your resources, none of these allow us to access your data, such as GCS objects or a BigQuery data._
{% endhint %}

The following permissions are used to get information about your Google Cloud resource hierarchy and correlate it with billing.

```
resourcemanager.organizations.get
resourcemanager.organizations.getIamPolicy
resourcemanager.folders.get
resourcemanager.folders.list
resourcemanager.projects.get
resourcemanager.projects.list
```

The following permission is required for [CMP Sandbox](../cloud-sandbox-management/create-gcp-sandbox-accounts.md) functionality (create Google Cloud projects)

```
resourcemanager.projects.create
```

The following permissions are required to provide you with [Rightsizing](../dashboards/rightsizing-for-google-cloud.md) Recommendations for your Google Compute Engine instances across your entire organization

```
recommender.computeInstanceMachineTypeRecommendations.list
compute.instances.list
```

The following set of permissions required for implementing [Rightsizing](../dashboards/rightsizing-for-google-cloud.md) recommendations:

```
compute.instances.setMachineType
compute.instances.stop
compute.instances.start
```

The following permissions are used to check the status (and enable if required) Google Cloud APIs (such as the [Recommender API](https://cloud.google.com/recommender/docs/reference/rest))

```
serviceusage.services.enable
serviceusage.services.get
serviceusage.services.list
serviceusage.services.use
```

The following permissions are required for the [BigQuery Lens Dashboard](../dashboards/bigquery-lens.md) to get actionable cost optimization recommendations for your Google BigQuery environment.

```
logging.sinks.create
bigquery.datasets.create
logging.sinks.get
bigquery.datasets.get
bigquery.tables.get
bigquery.tables.list
bigquery.jobs.get
bigquery.jobs.list
bigquery.jobs.listAll
bigquery.jobs.create
```

The following permissions are required to list your clusters for their GKE usage metering export configuration used to enable GKE reports in cloud analytics.

```
container.clusters.list
container.clusters.get
```

The following policies/permissions are required to proactively monitor AWS Quotas, access to the billing data, as well as the security posture of your AWS accounts:

```
arn:aws:iam::aws:policy/SecurityAudit
arn:aws:iam::aws:policy/AWSSavingsPlansReadOnlyAccess
arn:aws:iam::aws:policy/job-function/Billing
support:DescribeTrustedAdvisorCheckSummaries
support:DescribeTrustedAdvisorCheckRefreshStatuses
support:DescribeTrustedAdvisorChecks
support:DescribeSeverityLevels
support:RefreshTrustedAdvisorCheck
support:DescribeSupportLevel
support:DescribeCommunications
support:DescribeServices
support:DescribeIssueTypes
support:DescribeTrustedAdvisorCheckResult
trustedadvisor:DescribeNotificationPreferences
trustedadvisor:DescribeCheckRefreshStatuses
trustedadvisor:DescribeCheckItems
trustedadvisor:DescribeAccount
trustedadvisor:DescribeAccountAccess
trustedadvisor:DescribeChecks
trustedadvisor:DescribeCheckSummaries
```

AWS ASG Optimizer analyzes your Auto Scaling Groups based on cost and usage and get recommendations to replace on-demand EC2 instances with Spot instances.

```
autoscaling:BatchDeleteScheduledAction
autoscaling:BatchPutScheduledUpdateGroupAction
autoscaling:CreateOrUpdateTags
autoscaling:UpdateAutoScalingGroup
autoscaling:Describe*
cloudformation:ListStacks
cloudformation:Describe*
ec2:CreateLaunchTemplate
ec2:CreateLaunchTemplateVersion
ec2:ModifyLaunchTemplate
ec2:RunInstances
```

## What we store

We only store data required for CMP functionality.

* **Cloud Billing exports**- required for core Billing functionality; stored in BigQuery
* **User information** &mdash; required for core CPM functionality; stored in Firestore
* **Assets created via using CMP** ([Invoices](../invoices-and-payments/managing-invoices.md), [Billing Profiles](../invoices-and-payments/setting-up-a-new-billing-profile.md), etc.) &mdash; required for core CMP functionality; stored in Firestore
* **Contracts** &mdash; required for core CMP functionality; stored in Google Cloud Storage
* **Service Account Keys** &mdash; required for core CPM functionality; stored in Firestore and encrypted with KMS

## How we handle and store your data

All data we handle are encrypted in transit using industry-standard protocols like HTTPS (TLS).

All data we store are encrypted at rest:

* **Google BigQuery** &mdash; using Google-managed encryption keys and Advanced Encryption Standard (AES)
* **Google Firestore** &mdash; using Google-managed encryption keys and AES
* **Google Cloud Storage** &mdash; using Google-managed encryption keys and AES
* **Service Account Keys** &mdash; encrypted using Google Cloud KMS and stored in Google Secret Manager

## Who can access your data?

DoiT International employees in customer-facing roles, such as Account managers and Support engineers, can access your data using the CMP platform. Only a small team of core CMP developers is able to access your data directly in the underlying storage.

Service Account keys are only used by backend systems to retrieve relevant data from GCP. Only a small team of core CMP developers has access to the KMS keys used for encryption and would be able to decrypt the keys.

## 3rd parties

We do not provide your data to any 3rd party, with the exceptions listed below required for core CMP functionality.

* **CMP Support** &mdash; We use Zendesk as a backend for support ticketing functionality. All ticket-related data are stored in Zendesk and retrieved using Zendesk APIs \[1].
* **Payments** &mdash; We use Stripe for payments. All payment-related data (such as Credit card or bank account details) are stored in the Stripe platform and used via Stripe APIs \[2].

## Compliance

EU and GDPR Compliance &mdash; we have many customers in the European Economic Area and we handle your data in compliance with the General Data Protection Regulation (GDPR) \[3].

Our products regularly undergo independent verification of security, privacy, and compliance controls, achieving certifications against global standards to earn your trust. We're constantly working to expand our coverage.

The **SOC 2** and **SOC 3** is a report based on the Auditing Standards Board of the American Institute of Certified Public Accountants' (AICPA) existing Trust Services Criteria (TSC). The purpose of this report is to evaluate an organization's information systems relevant to security, availability, processing integrity, confidentiality, and privacy.&#x20;

**ISO/IEC 27001** outlines and provides the requirements for an information security management system (ISMS), specifies a set of best practices, and details the security controls that can help manage information risks.

Cloud Management Platform ISO/IEC 27001 and SOC 2/3 certificates may be requested via a opening a ticket at support.doit-intl.com. Potential customers can reach out to [sales](https://www.doit-intl.com/contact) for more information.

## External references

* \[1]: Zendesk Privacy and Data Protection: [https://www.zendesk.co.uk/company/privacy-and-data-protection/](https://www.zendesk.co.uk/company/privacy-and-data-protection/)
* \[2]: Stripe Global Privacy Policy: [https://stripe.com/gb/privacy](https://stripe.com/gb/privacy)
* \[3]: EU Data Protection page: [https://ec.europa.eu/info/law/law-topic/data-protection\_en](https://ec.europa.eu/info/law/law-topic/data-protection\_en)
