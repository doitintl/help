---
description: Understand your Google Cloud or Amazon Web Services Cost or Usage data
---

# Create Cloud Analytics Reports

**Cloud Analytics Reports** give you instant visibility into your Google Cloud or AWS costs without having to spend agonizing hours scanning through vendor's bills. Using Cloud Analytics Reports, you'll be able to slice and dice your cloud spend and shine a light on cost & performance optimization opportunities for your organization.

{% hint style="info" %}
Required Permissions: **Cloud Analytics**
{% endhint %}

{% hint style="warning" %}
Please connect your [Google Cloud Organization](../../google-cloud/connect-google-cloud-service-account.md) or [Amazon Web Services](https://app.gitbook.com/@doitintl/s/cmp/amazon-web-services/add-your-amazon-web-services-iam-role) to the Cloud Management Platform to get all available features.
{% endhint %}

## Accessing Cloud Reports

To access your Cloud Reports, select _Reports_ from the _Analytics_ menu item on the top navigation bar:

![A screenshot of the _Reports_ screen](../../.gitbook/assets/cmp-analytics-reports.png)

By default, CMP provided several preset reports to start with, such as:

- Google Cloud Monthly Credits History 12mo
- Daily Google Cloud Cost 12mo
- Monthly Google Cloud Cost by Service 12mo
- Monthly Google Cloud Cost by Project 12mo
- Google Cloud CloudSQL Hourly Cost 60d
- Trending Up Google Cloud Costs

Click on the "Explore" button on the top-right part of the Cloud Analytics page to begin working on a new ad-hoc Cloud Report. Reports created this way will not be automatically saved _unless_ you give it a name.

If you'd like your report to be automatically saved regardless of whether you give it a name, select the _Explore_ button, then select select _New Report_.

## Set up your Cloud Report

There are four steps to setting up your cloud report:

1. Give your Cloud Report a meaningful name
2. Drag fields to the "Dimensions" and "Breakout Dimensions" sections
3. Determine
   1. Which metric you'd like to measure your selected dimensions by
   2. How you'd like to visualize and display aggregations in your report
   3. The time interval & range for your report
4. Generate the report by clicking on the "Run" button

After a few seconds, your report will appear, ready for your analysis.

![A screenshot showing and example report](../../.gitbook/assets/cmp-example-report.png)

## FAQ

### When are the metric amounts (Cost, Usage, etc) for a day counted as "final"?

You can consider numbers "final" for 3 days after the date. With that in mind, there is really no SLA for this and numbers can change any time if there are corrections or delays that needs to be applied.

### Are the reports back-filled/updated, and at what frequency?

Cloud Analytics data and reports are updated hourly.

### What timezone are Cloud Analytics Reports based on?

Data coming from Google Cloud is based on Pacific time and Data coming from AWS is based on Coordinated Universal Time (UTC)

You can [configure a default timezone for new Cloud Analytics Reports in General > Settings](../../general/general-settings.md#timezone)

## Watch

View the bite-sized video below for a closer look at creating and exploring Cloud Reports:

{% embed url="https://www.loom.com/share/3bb89b9c624a4a52a2ecfbb61a56b4b8" %}
