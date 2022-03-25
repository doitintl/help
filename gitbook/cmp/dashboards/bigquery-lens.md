---
description: >-
  Your Swiss army knife for highlighting inefficiencies in your organization's
  BigQuery usage
---

# BigQuery Lens

Gain insights and highlight inefficiencies in your organization's Google Cloud _BigQuery_ usage with the [Cloud Management Platform](../) (CMP) _BigQuery Lens_. Have the essential BigQuery insights brought to you with zero configuration.

{% hint style="info" %}
To access the BigQuery Lens, you must verify that your Google Cloud service account was successfully uploaded and granted the appropriate permissions. Read more about [linking your Google Cloud Organization](../google-cloud/connect-google-cloud-service-account.md).
{% endhint %}

To check the status of your service account, select the _Settings_ icon (a gear) from the top menu bar, then select _Google Cloud_:

![A screenshot of the _Google Cloud_ settings screen"](../.gitbook/assets/cmp-google-cloud-settings.png)

You will need to enable the BigQuery Lens feature on this screen to use the BigQuery Lens. The same is true for BigQuery Lens Advanced.

After your service account has been uploaded and you have enabled the features you want, you will see:

* Either a _HEALTHY_ or _PARTIAL_ value underneath the _Status_ column in your _Configured Accounts_ widget
* _HEALTHY_ status next to _BigQuery Lens_ in the _Features_ widget
* _HEALTHY_ status next to _BigQuery Lens Advanced_ in the _Features_ widget (optional)

## Setup

Once the Google Cloud Service Account setup is complete, select the _Attach_ button from the dashboard navigation bar, then select _BigQuery Lens_ from the list of options.

After attaching the BigQuery Lens dashboard, a BigQuery Lens icon will appear on your dashboard and the CMP will start gathering information about your account usage patterns.

While this information is being collected, your BigQuery Lens will have the three following states:

1. You will see the following message displayed at the top of your screen:

   > We have started to analyze your historical usage. So far, we have processed X%. In the meantime, you can explore our training [Perks](../services/perks.md)!

2. Then, the message will change to:

   > The scan is completed, and X% of your data was already processed. You are almost there!

3. Finally, once the BigQuery Lens is activated, the message at the top will change to:

   > BigQuery Lens highlights inefficiencies in your BigQuery usage. The analysis represents the last 30 days of use

Once activated, the CMP will populate the BigQuery Lens dashboard with the statistics and recommendations about your organization's BigQuery usage.

{% hint style="info" %}
The BigQuery historical jobs are backfilled for the last 30 days.
{% endhint %}

## Understanding the BigQuery Lens

The BigQuery Lens dashboard is made up of widgets that, each designed to highlight a different aspect of your BigQuery usage:

![A partial screenshot of the BigQuery Lens dashboard](../.gitbook/assets/cmp-dashboard-bigquery-lens.png)

### Elements of the Dashboard

Below is a list of the elements that make up the BigQuery Lens dashboard, corresponding to the numbers in the image above.

1. _Time range and Usage type dropdowns_:

   * _Time range_ &mdash; Adjusts the time frame of the data you're looking at, and has options of _Last 30 days_, _Last 7 days_, or _Last day_
   * _Usage type_ &mdash; Determines which BigQuery projects you're looking at, based on the pricing model you're using to pay for them, and has options of _On demand_ or _Flat-rate_

2. _Recommendations_ &mdash; Comprehensive recommendations with details about how to act on each suggestion.

3. _BigQuery Explorer_ &mdash; Get more granular information as far as your team's BigQuery usage, completely adjustable by the user in the following format:

    * For the _On-demand_ usage type: <!-- textlint-disable max-comma -->(_Project_, _Billing Project_, _Dataset_, _Table_, _User_)<!-- textlint-enable --> by (_Scan Price_, _Scan TB_)
    * For _Flat-rate_ usage type: (_Project_, _Billing Project_, _Dataset_, _Table_, _User_) by (_Average Slots_)

    Select any of the components of the _BigQuery Explorer_ to drill down into the data.
4. _Slots Consumption_ &mdash; The number of slots consumed by your organization in terms of _Peak usage_ and _Average usage_ by _Day_ or _Hour_.

5. _BigQuery Scans by Table Type_ &mdash; See how much data you are scanning from various types of tables, broken down between unpartitioned tables and multiple types of partitioned tables, along with external sources (e.g., _Google Sheets_).

   Select a table type to see the most frequently scanned tables of that type.

6. _BigQuery Spend by SKU_ &mdash; BigQuery costs broken down per SKU.

   Select _View more_ in the top right-hand corner of the widget to view a more detailed report with more configuration options.

### BigQuery Recommendation Types

Below is a list of the recommendation categories you'll see in the _BigQuery Recommendations_ widget, which will depend on the _Usage type_ you've selected.

#### On-demand recommendations

* _Backup and remove unused tables_ &mdash; Back up and remove the tables listed under the _Table_ column. If the table has multiple partitions, select the number under _Partition(s) to Remove_ to see which partitions should be removed.
* _Cluster your tables_ &mdash; Cluster the tables listed under the _Table_ column by the fields suggested under the _Cluster By_ column.
* _Enforce Partition Fields_ &mdash; Use the suggested partitioned fields under the _Partition Field_ column for the corresponding queries listed under the _Query ID_ column.
* _Partition your tables_ &mdash; Partition the tables listed under the _Table_ column by the suggested fields listed under the _Partition Fields_ column.
* _Limit query jobs_ &mdash; Reduce execution frequency of the listed jobs under the _Query ID_ column by the percentage you choose on the slider and view the associated savings of each reduced job under the _Savings by Reducing Jobs_ column.
* _Switch to monthly flat-rate plan_ &mdash; Purchase the slots amount listed in the _Optimal slots amount_ column to reduce your BigQuery spend.

#### Flat-rate recommendations

* _Move repeating queries to a different time slot_ &mdash; Lower your minimum average slots requirements by moving the recurring queries to a less-busy hour of the day.

  Review the _BigQuery Slots Consumption_ widget with the interval set to _Hour_ to identify suitable hours. Any troughs in your daily slots consumption indicate optimal hours to run recurring queries.

* _Backup and remove unused tables_ &mdash; Back up and remove the unused tables to lower costs.

## Frequently Asked Questions (FAQ)

We need write-permissions to be able to run the BigQuery Lens. The sections below explain why.

### What write permissions are needed for the BigQuery Lens?

We need the following write permissions for the standard BigQuery Lens:

* `bigquery.datasets.create`
* `logging.sinks.create`
* `bigquery.jobs.create`

For BigQuery Lens Advanced, we need the following write permission:

* `bigquery.tables.getData`

### Why do you need an extra permission for BigQuery Lens Advanced?

We require the `bigquery.tables.getData` permission to provide clustering recommendations that are unique to BigQuery Lens Advanced.

This permission allows us to query your BigQuery tables, find your top 20 non-clustered tables and then determine which fields are the best candidates to cluster those tables by and in what order.

More specifically, this permission helps us identify the cardinality of the columns referenced in the `WHERE` clause (i.e., the columns which can be clustered on). Knowing how many distinct elements exist in each column allows us to compute the average chunk size and determine the best savings candidates.

{% hint style="info" %}
BigQuery Lens Advanced provides recommendations based on the presumption that:

* You will continue to execute similar queries as you did during the previous 30 day period, and
* You will reference fields in the order that we recommend
{% endhint %}

### What datasets do you create?

A dataset called `doitintl-cmp-bq` is created in the billing project attached to the service account you add to the CMP.

### What sinks do you create?

A sink for query jobs is created in the billing project attached to the service account you add to the CMP. This sink pushes all your BigQuery jobs into a table under `<PROJECTID>.doitintl-cmp-bq.cloudaudit_googleapis_com_data_access`.

### What queries do you run?

We have two main processes, one of which runs queries and the other which runs the enrichment process:

1. We take the data from `doitintl-cmp-bq.cloudaudit_ googleapis_com_data_access` and create a new table named `doitintl-cmp-bq.enrichedJobs`. This operation is done at no cost to you. We do this to perform an enrichment process so that we have a clean dataset to work with.

2. For the BigQuery Lens enrichment process, we create a few UDFs under the `doitintl-cmp-bq` dataset, as well as two more derived tables named `pegUtilsT2` and `queries`. These tables allow the lens to run over aggregated data rather than raw data.

   The following queries are executed as part of this process:

   * Aggregations are written to the `pegUtilsT2` and `queries` tables
   * Daily run of cost simulation queries to provide the cost savings information and potential savings
   * Daily run of lens calculation queries to provide detailed BigQuery usage

### What does it mean when I see "Not yet allocated" in the Cost Explorer?

You will see "Not yet allocated" when analyzing dimensions like _Projects_ in the _BigQuery Explorer_ when we cannot detect which table a query is scanning.

We may not be able to detect which table is being scanned because of:

* Queries like `SELECT 1`
* Queries we are unable to parse due to complexity (i.e., a parser time out), or
* Queries that use a function or statement that we do not support yet

![A screenshot highlighting the _Not yet allocated_ figure](../.gitbook/assets/cmp-not-yet-allocated.png)

### How much does BigQuery Lens cost monthly?

BigQuery Lens creates and maintains datasets on your behalf to provide you with analytics data (as described above). Typically, this process costs less than $10 per month.

### What is the difference between "Project" and "Billing project" in the Explorer widget?

The _Billing project_ runs the query and incurs the costs. The _Project_ contains the data that is queried.

## Watch a demo

{% embed url="https://www.loom.com/share/7f00f912d1cc4993a89077214bd7b358" %}
Watch a demo of the BigQuery Lens
{% endembed %}
