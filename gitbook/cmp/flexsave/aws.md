---
description: >-
  A fundamentally new way to save money on your Amazon workloads without making
  long-term commitments
---

# FlexSave for AWS

FlexSave is your cloud co-pilot, dynamically maximizing your cloud-compute discounts for [Amazon Web Services][aws] (AWS) without any of the risks or limitations of long-term use commitments.

In most cases, save [the equivalent of a 1-year commitment discount](overview.md#how-much-can-i-save) on your cloud-compute spend with on-demand access to DoiT International's wholesale inventory of AWS [Savings Plans][sps] (SPs) and AWS [EC2 Reserved Instances][ris] (RIs).

{% hint style="info" %}
See also:

* [FlexSave overview: Benefits](overview.md#benefits)
* [FlexSave overview: How it works](overview.md#how-it-works)
* [FlexSave overview: Start saving](overview.md#start-saving)
{% endhint %}

## Capabilities

### Supported regions

FlexSave supports all AWS [regions](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions).

### Supported instance types

You can check what instances types are available in your region using the [Amazon EC2 Reserved Instances Pricing](https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/) page.

Select the _Convertible Reserved Instances for Amazon EC2_ tab and enter your search criteria. The table of available instance types will automatically refresh.

{% hint style="success" %}
We currently support:

* Linux-based operating systems
* Windows-based operating systems (including Microsoft SQL Server)
{% endhint %}

{% hint style="warning" %}
We do not support _RedHat Enterprise Linux_ (RHEL) and _SuSe Enterprise Linux_ (SLES) at this time.
{% endhint %}

If you cannot find any [Convertible Reserved Instances](https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-reservation-models/standard-vs.-convertible-offering-classes.html) using one of our supported operating systems (see above) in your region, FlexSave does not support that instance type.

### Supported products

{% hint style="success" %}
We support the following products:

* [AWS EC2](https://aws.amazon.com/ec2/) &mdash; Secure and resizable compute capacity for virtually any workload
{% endhint %}

{% hint style="info" %}
We plan to support the following products soon:

* [AWS Lambda](https://aws.amazon.com/lambda/) &mdash; Run code without thinking about servers or clusters
* [AWS Fargate](https://aws.amazon.com/fargate/) &mdash; Serverless compute for containers

Support for these products will be limited to customers with dedicated billing accounts.
{% endhint %}

{% hint style="warning" %}
We do not support any other products like [AWS RDS](https://aws.amazon.com/rds/), [VMware Cloud on AWS](https://aws.amazon.com/vmware/), and [Amazon ElastiCache](https://aws.amazon.com/elasticache/) at this time.
{% endhint %}

## Help

### FAQs

{% hint style="info" %}
These frequently asked questions (FAQs) apply to FlexSave for AWS.

For platform-agnostic information, see:

* [FlexSave overview: FAQs](overview.md#faqs)
{% endhint %}

#### Can I use FlexSave if I am already using SPs or RIs?

Yes, you can. FlexSave works exclusively with your on-demand compute usage and excludes anything already covered by your own SPs or RIs.

#### Can FlexSave provide discounts for on-demand capacity reservations?

FlexSave only supports AWS regional reserved instances. Because AWS on-demand capacity reservations require zonal reserved instances, FlexSave does not provide capacity reservation discounts or discounts for [on-demand capacity reservations][capacity-reservations].

FlexSave only supports AWS regional reserved instances. Because AWS on-demand capacity reservations require zonal reserved instances, FlexSave cannot provide discounts for [on-demand capacity reservations][capacity-reservations].

{% hint style="info" %}
See also:

* [AWS EC2 documentation: Regional and zonal reserved instances][regional-zonal]
{% endhint %}

#### I have a special pricing plan on my AWS account. Can I still use FlexSave, and will it impact my existing savings?

FlexSave can still work with your account and will provide savings _in addition to_ the discounts from your pricing plan.

#### Why don't I see any savings?

If you enabled FlexSave today, you might have to wait until the first week of next month before you start to see any savings. This delay is because AWS releases monthly billing data retroactively, and we need the most recent billing data to analyze your resource utilization and apply savings.

### Contact us

{% hint style="info" %}
If you have additional questions about FlexSave, please [contact our support team](../services/consulting-support/).
{% endhint %}

[aws]: https://aws.amazon.com/
[capacity-reservations]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html
[regional-zonal]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-scope.html
[ris]: https:/aws.amazon.com/ec2/pricing/reserved-instances/
[sps]: https:/aws.amazon.com/savingsplans/
