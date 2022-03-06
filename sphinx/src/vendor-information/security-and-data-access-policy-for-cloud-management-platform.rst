.. _vendor-information_security-and-data-access-policy-for-cloud-management-platform:

CMP Data Access Policy
======================

.. epigraph::

   Security and Data Access Policy for Cloud Management Platform

This document outlines what customer data Cloud Management Platform accesses, why, what data is stored, and how we do that. **If you're not using DoiT Cloud Management Platform for the following features, this article doesn't apply**.

* Enterprise Cloud Accounts (formerly Sandboxes)
* Google Cloud Rightsizing
* Google Kubernetes Engine Metering
* BigQuery FinOps
* Google Cloud and/or AWS Proactive Quota Monitoring
* AWS ASG Optimizer

**TL;DR:** We only access data required for Cloud Management Platform (CMP) functionality. We store and handle your data in a secure way, encrypted in transit and at rest. We do not provide the data to any 3rd party, with the exceptions required for core CMP functionality and listed below.

.. _h_7bc78dd6-eab0-4188-bf00-b0017561511f:

What we access
--------------

The list below denotes all permissions we require to your Google Cloud Organization and why.

.. ATTENTION::

   *While this provides us permissions to read info about your resources, none of these allow us to access your data, such as GCS objects or a BigQuery table's data.*

The following permissions are used to get information about your Google Cloud resource hierarchy and correlate it with billing.

.. code-block::

   resourcemanager.organizations.get
   resourcemanager.organizations.getIamPolicy
   resourcemanager.folders.get
   resourcemanager.folders.list
   resourcemanager.projects.get
   resourcemanager.projects.list

The following permission is required for :doc:`CMP Sandbox <../cloud-sandbox-management/create-gcp-sandbox-accounts>` functionality (create Google Cloud projects)

.. code-block::

   resourcemanager.projects.create

The following permissions are required to provide you with :doc:`Rightsizing <../dashboards/rightsizing-for-google-cloud>` Recommendations for your Google Compute Engine instances across your entire organization

.. code-block::

   recommender.computeInstanceMachineTypeRecommendations.list
   compute.instances.list

The following set of permissions required for implementing :doc:`Rightsizing <../dashboards/rightsizing-for-google-cloud>` recommendations:

.. code-block::

   compute.instances.setMachineType
   compute.instances.stop
   compute.instances.start

The following permissions are used to check the status (and enable if required) Google Cloud APIs (such as the `Recommender API <https://cloud.google.com/recommender/docs/reference/rest>`__)

.. code-block::

   serviceusage.services.enable
   serviceusage.services.get
   serviceusage.services.list
   serviceusage.services.use

The following permissions are required for the :doc:`BigQuery FinOps Dashboard <../dashboards/bigquery-finops-dashboard>` to get actionable cost optimization recommendations for your Google BigQuery environment.

.. code-block::

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

The following permissions are required to list your clusters for their GKE usage metering export configuration used to enable GKE reports in cloud analytics.

.. code-block::

   container.clusters.list
   container.clusters.get

The following policies/permissions are required to proactively monitor AWS Quotas, access to the billing data, as well as the security posture of your AWS accounts:

.. code-block::

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

AWS ASG Optimizer analyzes your Auto Scaling Groups based on cost and usage and get recommendations to replace on-demand EC2 instances with Spot instances.

.. code-block::

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

What we store
-------------

We only store data required for CMP functionality.

* **Cloud Billing exports** - required for core Billing functionality; stored in BigQuery
* **User information** - required for core CPM functionality; stored in Firestore
* **Assets created via using CMP** (:doc:`Invoices <../invoices-and-payments/managing-invoices>`, :doc:`Billing Profiles <../invoices-and-payments/setting-up-a-new-billing-profile>`, etc.) - required for core CMP functionality; stored in Firestore
* **Contracts** - required for core CMP functionality; stored in Google Cloud Storage
* **Service Account Keys** - required for core CPM functionality; stored in Firestore and encrypted with KMS

.. _h_24ce7c2f-7dbb-482d-94a7-3a73a39adcb7:

How we handle and store your data
---------------------------------

All data we handle are encrypted in transit using industry-standard protocols like HTTPS (TLS).

All data we store are encrypted at rest:

* **Google BigQuery** - using Google-managed encryption keys and Advanced Encryption Standard (AES)
* **Google Firestore** - using Google-managed encryption keys and AES
* **Google Cloud Storage** - using Google-managed encryption keys and AES
* **Service Account Keys** - encrypted using Google Cloud KMS and stored in Google Secret Manager

.. _h_e71c7f53-d7e9-4273-a1cc-49e6714bbfa6:

Who can access your data?
-------------------------

DoiT International employees in customer-facing roles, such as Account managers and Support engineers, can access your data using the CMP platform. Only a small team of core CMP developers is able to access your data directly in the underlying storage.

Service Account keys are only used by backend systems to retrieve relevant data from GCP. Only a small team of core CMP developers has access to the KMS keys used for encryption and would be able to decrypt the keys.

.. _h_2dd17fc8-13d8-4aad-b58c-3a9be9bc310e:

3rd parties
-----------

We do not provide your data to any 3rd party, with the exceptions listed below required for core CMP functionality.

* **CMP Support** - We use ZenDesk as a backend for support ticketing functionality. All ticket-related data are stored in ZenDesk and retrieved using ZenDesk APIs [1].
* **Payments** - We use Stripe for payments. All payment-related data (such as Credit card or bank account details) are stored in the Stripe platform and used via Stripe APIs [2].

.. _h_cb4c8c24-7b2b-4458-b890-8c866b99aee6:

Compliance
----------

EU and GDPR Compliance - we have many customers in the European Economic Area and we handle your data in compliance with the General Data Protection Regulation (GDPR) [3].

We're working towards completing our SOC 2 Type 2 audit. We anticipate the Type 2 report being available during Q2, 2021.

.. _h_923e9d39-0606-471f-bbb3-2f899c859d8c:

External references
-------------------

* [1]: Zendesk Privacy and Data Protection: `https://www.zendesk.co.uk/company/privacy-and-data-protection/ <https://www.zendesk.co.uk/company/privacy-and-data-protection/>`__
* [2]: Stripe Global Privacy Policy: `https://stripe.com/gb/privacy <https://stripe.com/gb/privacy>`__
* [3]: EU Data Protection page: `https://ec.europa.eu/info/law/law-topic/data-protection_en <https://ec.europa.eu/info/law/law-topic/data-protection_en>`__
