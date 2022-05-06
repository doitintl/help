---
description: >-
  How to transfer your existing Google Cloud projects to your new billing
  account with DoiT International
---

# Transfer Google Cloud Projects

## Overview

To change the Cloud Billing account for a project, you need to be able to move a project from your existing Cloud Billing account to another Cloud Billing account provided by DoiT International. To accomplish this task, you need permissions adequate to unlink the project from the existing Cloud Billing account AND to link the project to the target Cloud Billing account.

{% hint style="warning" %}

If you have Google Cloud Marketplace subscriptions for any of the below products - **please reach out to your DoiT Account Manager** - switching billing account for projects that use these products may result in data loss.

The products in question are:

- Confluent Apache Kafka on Confluent Cloud
- Neo4j AuraDB Professional
- Neo4j GCP Integration Service (Prod)
- Redis Labs Redis Enterprise Cloud
- Trifacta Cloud Dataprep by Trifacta
- DataStax Astra for Apache Cassandra (Beta)
- Elastic Cloud (managed Elasticsearch Service)
- NetApp, Inc. NetApp Cloud Volumes Service
- MongoDB Atlas

{% endhint %}

Here is a short video explaining how you can check whether or not your billing account has any of the above marketplace subscriptions:&#x20;

{% embed url="https://www.loom.com/share/95ddb117ff974cc88553f1fd6efead85" %}

## Transferring manually

If you have several dozens of GCP projects or less, the simplest way is to switch billing manually for each of the projects one by one. We've created screenshot-illustrated [guide](transfer-manually.md) to walk you through.

## Bulk Transfer using Wizard

For large amount of projects the manual transfer can be too tedious. To make this process _much faster_, DoiT International developed a Project Transfer Wizard in the Cloud Management Platform to help you bulk-transfer all of your existing Google Cloud projects to the billing account assigned to you by DoiT International.

Please follow the guide [here](bulk-transfer-using-wizard.md).

## Terraform

If your projects are managed via Terraform, you should set/replace the **`billing_account`** value in your script with your DoiT Billing Account ID. Note that the user or service account performing this operation with Terraform must have at minimum Billing Account User privileges.&#x20;

Please follow the steps from the [illustrated-guide](terraform.md).&#x20;
