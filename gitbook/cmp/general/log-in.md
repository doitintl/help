---
description: How to log in and access the Cloud Management Platform (CMP)
---

# Log in to the CMP

You can log in to the DoiT International _Cloud Management Platform_ (CMP) using one of the methods detailed below.

To log in, visit the [log-in screen](https://app.doit-intl.com/login):

![A screenshot of the log-in screen](../.gitbook/assets/cmp-log-in.png)

## Log-in methods

### Customers

#### Use an existing Google Workspace account

<!-- textlint-disable terminology -->
Select the _SIGN IN WITH GOOGLE_ button and follow your organization's _Single Sign-On_ (SSO) instructions to log in.
<!-- textlint-enable -->

{% hint style="info" %}

If your organization uses Google Workspace, we recommend that your staff members use this log-in method.

By default, administrator permission isn't required to log in to the CMP for the first time on behalf of your organization (unless Google Workspace has been explicitly configured that way by an administrator).

{% endhint %}

#### Use an existing Microsoft Office 365 account

Select the _SIGN IN WITH MICROSOFT_ button and follow your organization's _Single Sign-On_ (SSO) instructions to log in.

{% hint style="info" %}

If your organization uses Microsoft Office 365, we recommend that your staff members use this log-in method.

However, to set up access, a Microsoft Office 365 administrator must first log and grant the CMP permission to read user information for your organization.

{% endhint %}

#### Use an email address and password

If you already have a CMP account, enter your email address and password to log in.

If you do not have a CMP account, you can create one by selecting _SIGN UP_ and following the instructions.

{% hint style="info" %}

If you have forgotten your password, enter your email address, then select the _CONTINUE_ button. On the next screen, select _Forgot password?_ and follow the instructions to reset your password.

{% endhint %}

### Partners

#### Use your Amazon or Google email address

If you work for Amazon or Google, you can log in as a partner by entering your company email address and selecting the _CONTINUE_ button.

After selecting _CONTINUE_, the CMP will send you an email with further instructions.

## FAQ

### Can I limit access to a single log-in method?

Yes, you can.

Please create a [support request](../services/consulting-support/README.md), tell us which log-in method your organization uses, and we will disable the other options.

### Can I use my own _Single Sign-On_ (SSO) provider?

Yes, you can.

Please create a [support request](../services/consulting-support/README.md), and we will configure access via your organization's SSO provider.

We will need the following information:

| SAML providers  | OIDC providers  |
| --------------- | --------------- |
| _Entity ID_     | _Client ID_     |
| _SSO URL_       | _Issuer (URL)_  |
| _Certificate_   | _Client Secret_ |

You can provide this information in the support request, or we can set up a configuration session with you.
