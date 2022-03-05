---
description: Download query results to your GCS bucket
---

# Connect Google Cloud Storage to superQuery

Follow these short instructions to have all downloaded CSV results go into a GCS bucket.

Open superQuery and click on your Profile icon in the Resource Panel. Then, click on "**Settings**".

![](<../.gitbook/assets/image (98).png>)

You should arrive at the "**System Preferences**" tab. Under "**Download CSV**", select **Private**.&#x20;

![](<../.gitbook/assets/image (99).png>)

Then click "**Set credentials**" to set up your Google Cloud Storage service account.

### Enter Google Cloud Storage Credentials

* Enter the name of your GCS bucket.
* Follow Google Cloud's instructions for [creating service account keys](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#iam-service-account-keys-create-console).

Keys created using the GCP Console or the `gcloud` command-line tool look like this:

```
{
"type": "service_account",
"project_id": "[PROJECT-ID]",
"private_key_id": "[KEY-ID]",
"private_key": "-----BEGIN PRIVATE KEY-----\n[PRIVATE-KEY]\n-----END PRIVATE KEY-----\n",
"client_email": "[SERVICE-ACCOUNT-EMAIL]",
"client_id": "[CLIENT-ID]",
"auth_uri": "https://accounts.google.com/o/oauth2/auth",
"token_uri": "https://accounts.google.com/o/oauth2/token",
"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/[SERVICE-ACCOUNT-EMAIL]"
}
```

![](<../.gitbook/assets/image (101).png>)
