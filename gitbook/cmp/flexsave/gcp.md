---
description: >-
  A fundamentally new way to save money on your Google Cloud workloads without
  making long-term commitments
---

# Flexsave for GCP

Flexsave is your cloud co-pilot, dynamically maximizing your cloud-compute discounts for [Google Compute Platform](https://cloud.google.com) (GCP) without any of the risks or limitations of long-term use commitments.

In most cases, save [the equivalent of a 1-year commitment discount](overview.md#how-much-can-i-save) on your cloud-compute spend with on-demand access to DoiT International's wholesale inventory of GCP [Committed Use Discounts](https://cloud.google.com/docs/cuds) (CUDs).

{% hint style="info" %}

See also:

- [Flexsave overview: Benefits](overview.md#benefits)
- [Flexsave overview: How it works](overview.md#how-it-works)
- [Flexsave overview: Start saving](overview.md#start-saving)

{% endhint %}

## Capabilities

### Supported regions and machine types

Flexsave supports all GCP [regions](https://cloud.google.com/compute/docs/regions-zones) and [machine types](https://cloud.google.com/compute/docs/machine-types) supported by resource-based CUDs (except for GPU accelerators, i.e., `A2` instances). We don't support [commitments for GPUs or SSDs](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts#commitments_for_gpus_and_local_ssd).

## Help

### FAQs

{% hint style="info" %}

These frequently asked questions (FAQs) apply to Flexsave for GCP.

For platform-agnostic information, see:

- [Flexsave overview: FAQs](overview.md#faqs)

{% endhint %}

#### What changes should I expect to see in my Google Cloud Console?

You should expect to see:

- Commitment scope set to _Billing account_
- Projects with 3-year committed use discounts and names like `doitintl-fs-xxxxxxx` attached to your billing account

The commitments will apply committed use discounts across all eligible usage (all projects) associated with this billing account when enabling the billing account scope.

#### How soon after enabling Flexsave should I expect to see the savings?

You should expect to see savings within 72 hours.

#### Why aren't my Savings showing up?

Savings always show with a three-day delay. For example, if today was the 23rd day of the month, your Savings will be accurate to the 20th.

#### Can I use Flexsave if I already use CUDs or _Sustained Use Discounts_ (SUDs)?

Absolutely. Flexsave works exclusively with your on-demand compute usage and excludes anything already covered by an existing discount.

Any resources that do not qualify for committed use discounts automatically qualify for sustained use discounts. You can't combine committed use discounts and sustained use discounts for the same resources.

#### Can I use Flexsave with _Google Kubernetes Engine_ (GKE)?

Flexsave can provide CUD discounts for GKE nodes that use the [Google Compute Engine (GCE) pricing model](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts#restrictions). However, we cannot provide [CUD discounts for GKE Autopilot Mode](https://cloud.google.com/kubernetes-engine/cud).

#### I have a special pricing plan on my GCP account. Can I still use Flexsave, and will it impact my existing savings?

Flexsave can still work with your account and will provide savings _in addition to_ the discounts from your pricing plan.

### Contact us

{% hint style="info" %}
If you have additional questions about Flexsave, please [contact our support team](../services/consulting-support/).
{% endhint %}
