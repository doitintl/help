# Transfer manually

{% hint style="warning" %}
Please mind the Google Marketplace [note](./).
{% endhint %}

Please follow the below steps to switch your Google Cloud projects to use DoiT-provided billing account.

## The steps

* Go to [https://console.cloud.google.com/billing](https://console.cloud.google.com/billing)
* Make sure your organization is selected and then click on your the billing account from the list

![A screenshot showing you the organization selection menu and the billing account list](../../.gitbook/assets/gcp-organization-menu-billing-account-list.png)

* Click on Manage

![A screenshot showing the location of the Manager option](../../.gitbook/assets/gcp-manager-option.png)

* The list of your Google Cloud projects currently linked to this billing account will be displayed. For each of the projects, click on the three-dots menu and select "Change billing"

![A screenshot showing the location of the Change Billing option](../../.gitbook/assets/gcp-change-billing-option.png)

* In the popup modal, please select the new billing account provided to you by DoiT International

![A screenshot showing you the billing account dropdown menu](../../.gitbook/assets/gcp-billing-account-menu.png)

* Repeat for each projects on the list

Within an hour, your transferred projects will appear in DoiT [Cloud Management Platform](https://hello.doit-intl.com).

![A screenshot showing you how to access the list of transferred projects](../../.gitbook/assets/gcp-access-transferred-projects.png)

## Troubleshooting

### I don't see any billing accounts in my Google Cloud Organization

Make sure you have Billing Account Administrator permissions on your billing account in question. Please contact your Google Cloud administrator if you believe you don't.

### I can't change billing for the projects listed

To change billing account for a project you need to have proper permissions on the project itself. Usually having Billing Account Administrator on your whole Google Cloud Organization or the project in question is enough.

### While trying to select a new Billing Account no DoiT billing accounts appear on the list

Make sure you have access to the target Billing Account. To verify, please go to hello.doit-intl.com and check if your name is on the list:

![A screenshot showing you how to verify you have access to the billing account](../../.gitbook/assets/cmp-verify-access-billing-account.png)

If it's not, please contact one of the persons who are on the list to add you.
