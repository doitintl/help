.. _spot-scaling_spot-scaling-overview:

Spot Scaling Overview
=====================

.. epigraph::

   autonomous cost optimization of EC2 fleets using Spot instances

What is Spot Scaling?
---------------------

Spot Scaling proactively monitors your AWS Auto-Scaling Groups (ASGs), intelligently replacing all or some of an ASG's on-demand EC2 instances with Spot instances using sophisticated AI-assisted analysis.

By managing your ASGs, Spot Scaling takes care of your launch templates, configuration, mixed instances policies, and a myriad of other configuration settings so you can focus on core activities.

To minimize interruptions, Spot Scaling will add more similar instance types and zones into your ASG configuration. Still, if there are no spot instances available, Spot Scaling will fall back to on-demand instances, ensuring the high availability of your systems.

How does Spot Scaling work?
---------------------------

Analyze
^^^^^^^

Spot Scaling runs in the background, integrating natively with your AWS Auto Scaling Groups (ASG), and monitors the configuration and potential savings within each group.

Recommend
^^^^^^^^^

Spot Scaling recommends the most suitable configuration for your Auto Scaling Group to run reliably and cost effectively. while presenting you with the monthly potential savings vs. on-demand. You can accept your recommendations as-is, or modify them as you see fit.

Provision
^^^^^^^^^

After you apply the recommendations, Spot Scaling updates your Auto Scaling Group to work in a `mixed instances policy <https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API\_MixedInstancesPolicy.html>`__. In addition, it replaces on-demand instances with spot instances according to the recommended settings, which you can change anytime.

After you apply the recommendations, Spot Scaling updates your Auto Scaling Group to work in a `mixed instances policy <https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API\_MixedInstancesPolicy.html>`__. In addition, it replaces on-demand instances with spot instances according to the recommended settings, which you can change anytime.

When Spot Scaling cannot spin up Spot instances due to lack of spot capacity, it automatically falls back to on-demand to ensure availability and reverts to spot instances as soon as possible. As a result, the system uptime for your app(s) are maximized, while EC2 costs are minimized.

Monitor
^^^^^^^

Spot Scaling continuously assesses your Auto Scaling Groups and presents important metrics such as:

* Costs
* Spot and On-Demand hours
* Savings for the previous and current month.

What are the advantages of Spot Scaling?
----------------------------------------

**Reliable & Safe** Spot Scaling works with AWS native Auto Scaling Groups, supporting fallback to on-demand and follows `Spot Instance Best Practices <https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-leveraging-ec2-spot-instances/spot-best-practices.html>`__

**No cost overhead** - You get the full spot discount provided by AWS.

**Quick and Easy** - Enable in less than 5 minutes with CloudFormation StackSets. After essentially two clicks, your Auto Scaling Group is Spot optimized.

**No vendor lock-in** - You can decide to stop using it at any given time and revert back to what your ASGs were configured as prior to enabling the features.

**Typical Savings**
-----------------------

**Scenario:** 0 m5.xlarge instances; replacing 80% of on-demand instances with Spot instances

.. list-table::
   :header-rows: 1

   * - **Without Spot Scaling**
     - **With Spot Scaling**
     - **Monthly Cost**
     -
   * - 50 instances * $0.192 * 730h = $7,008
     - 10 instances × $0.192 × 730h = $1,401
     - 0 instances × $0.0399 × 730h = $1,165
     - Total cost = $1,401 + $1,165 = $2,566
   * - Monthly Savings $
     - $0
     - $4,442
     -
   * - Monthly Savings %
     - 0%
     - 63%
     -

Now let's explore how to set up and use Spot Scaling.
