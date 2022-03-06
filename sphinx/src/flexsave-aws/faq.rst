.. _flexsave-aws_faq:

FlexSave for AWS FAQ
====================

.. epigraph::

   Frequently asked questions about FlexSave for Amazon Web Services

Overview
--------

FlexSave helps you maximize EC2 discounts with zero commitments, loss risk, or management on your part. It works by analyzing your on-demand workloads, and then applying the ideal mix of RIs and Savings Plans to them, optimizing for cost.

In order to use FlexSave, your AWS account/s should be consolidated with the DoiT International billing organization. DoiT International is a global `AWS Advanced Channel Reseller <https://partners.amazonaws.com/partners/001E000001HPlIAIA1/>`__.

How much can I save every month?
--------------------------------

You can realize between 80% and 100% of the discount granted by the applicable AWS Reserved Instance 1-year Full Upfront.

For example, AWS grants a 19.5% discount on reserved instances for instances from the m5 instance family in the us-west-1 region. A FlexSave reservation for this machine/region combination will provide you with a 15.6% (19.5% * 0.8) discount but without the risk of committing to the entire year.

Can I use FlexSave if I am using AWS RIs or Saving Plans?
---------------------------------------------------------

FlexSave reservations are applied to on-demand usage. Usage covered by AWS Reserved Instances or Savings Plans is excluded.

Which AWS services are supported with FlexSave?
-----------------------------------------------

At this time, FlexSave supports AWS EC2. Other AWS services such as AWS RDS, VMware or Elasticache aren't supported at this time. Since FlexSave relies on AWS Convertible Reservations, you can check supported instances on `AWS website <https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/>`__. If there are no Convertible Reservations available for your instance type, it's not supported with FlexSave as well.

Can I send a report to the CFO with the actual realized savings?
----------------------------------------------------------------

Your actual savings is displayed in your FlexSave Dashboard. Your CFO should have access to this dashboard if they have the FlexSave Admin permission, and would be able to monitor the utilization as well as the actual savings yielded by the FlexSave.

This is your :doc:`FlexSave Dashboard <overview>`:

.. image:: ../_assets/cleanshot-2021-09-14-at-11.51.28\ (1)\ (1).jpg
   :alt: A screenshot of an example FlexSave dashboard

Do you support every Operating System?
--------------------------------------

Right now, we support Linux and Windows-based (including with Microsoft SQL Server) operating systems. RedHat Enterprise Linux (RHEL) and SuSe Enterprise Linux (SLES) are not yet supported.

How does FlexSave differ from Reserved Instances or Saving Plans?
-----------------------------------------------------------------

With FlexSave there is:

* Zero commitment required
* Zero loss burden on your part :raw-html:`&mdash;` even if you shut down instances in the middle of the month
* Zero management on your part :raw-html:`&mdash;` once you enable FlexSave you don't need to do anything else

.. list-table::
   :header-rows: 1

   * - Feature
     - DoiT FlexSave
     - AWS RIs
     - AWS Compute Saving Plans
   * - Minimum commitment period
     - None
     - 12-months
     - 12-months
   * - Automatic renewal
     - Yes
     - no
     - no
   * - Regional
     - Yes
     - Yes
     - No
   * - Instance Type-specific
     - Yes
     - Yes
     - No
   * - Covers non-EC2 workloads
     - No
     - No
     - Lambda, Fargate

Which regions are supported with FlexSave?
------------------------------------------

Please see our :doc:`supported regions matrix <flexsave-regions>` for more details.

I enabled FlexSave, but there aren't savings yet. What do I do?
---------------------------------------------------------------

FlexSave goes into effect from the beginning of the next month, but you get access to the :doc:`FlexSave Dashboard <overview>` right away.

It's the beginning of the month and I see no savings yet. What should I do?
---------------------------------------------------------------------------

This happens due to a delay in receiving billing data from AWS. You can expect to see accurate savings data from the 4th day of the current month.
