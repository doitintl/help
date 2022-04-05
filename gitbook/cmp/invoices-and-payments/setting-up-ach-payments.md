---
description: How to set up Automated Clearing House payments with Cloud Management Platform
---

# Set up ACH Payments

You can pay your invoices by using ACH (Automated Clearing House) via the Cloud Management Platform. Please follow the step-by-step instructions on how to set up an ACH Payment for your company.

{% hint style="info" %}
Required Permissions: **Billing Profile Admin**
{% endhint %}

{% hint style="warning" %}
Please note that you must be assigned access to the specific Billing Profile under which the domain is managed in order to purchase a license.
{% endhint %}

From the main CMP dashboard, select the edit icon next to the billing profile you would like to update.

![A screenshot of the CMP dashboard](../.gitbook/assets/cmp-dashboard.png)

From the billing profile screen, select _Payment Methods_ from the left-hand menu:

![A screenshot of the _Payment Methods_ screen](../.gitbook/assets/cmp-payment-methods.png)

From the _Payment Methods_ screen, select _ACH Payment_, then select _Link New Account_ to link your bank account.

## Link Account

We use Plaid (plaid.com) to perform secure ACH payments authorizations which don't require making small deposits to your account for verification.

![A screenshot showing you the initial Plaid modal dialog with a Continue button](../.gitbook/assets/cmp-ach-2.png)

Next, choose your bank.

![A screenshot of the modal dialog showing you how to select your bank](../.gitbook/assets/cmp-ach-3.png)

Then enter the same credentials used for your online banking account.

![A screenshot of the modal dialog showing you how to enter your banking credentials](../.gitbook/assets/cmp-ach-4.png)

After that, choose either a 'Checking' or 'Saving' account.

![A screenshot of the modal dialog showing you the ability to select between a Checking or Savings account](../.gitbook/assets/cmp-ach-6.png)

Finally, your bank account details should successfully be linked and saved for future ACH Payments.

![A screenshot of the modal dialog showing you the final payment setup form](../.gitbook/assets/cmp-ach-7.png)

## Pay Invoice with ACH

The saved ACH method will be available when you want to pay for future invoices.

![A screenshot showing you a list of saved payment methods](../.gitbook/assets/cmp-ach-8.png)

We will automatically initiate ACH debits when your invoice is due. Please note, ACH payments take 4&ndash;7 days to process. While processing, the invoice will be shown with the "processing" state.

<!--
## Manually set up ACH payments

There are some edge cases where our ACH verification process doesn't work properly, such as when you have a Wells Fargo or Bank of America account with two-factor authentication enabled.

To manually set up ACH payments, open a support ticket under the "Billing" category, and provide the following information:

* Routing number
* Account number
* Account holder name
* Account holder type (individual or company)

Once we have this information, we will send two small deposits for verification purposes. Typically, these deposits take 1&ndash;2 business days to appear on your online statement.

The statement has a description that includes AMTS followed by the two deposit amounts. To validate your bank account information, follow up on the support ticket with this AMTS description once you see the deposits.
-->
