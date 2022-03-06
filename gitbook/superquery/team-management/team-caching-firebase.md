# Set up Team Caching with Firebase

**Team caching** enables you to share a cache across your team. That way, if you run a query that a colleague executed earlier in the day, you will have the option to quickly pull their results from cache.

This post goes over how to set up the cache to be stored on your Firebase.

## Create JSON key for service account

First, open the [IAM & Admin page](https://console.cloud.google.com/project/\_/iam-admin?\_ga=2.255639179.-2078623115.1529931311) in the Google Cloud Console. Then, select your project and click "**Continue**".

In the left-hand navigation panel, click "**Service accounts**".

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (102).png>)

Then look for the service account for which you wish to create a key. Click the **More &vellip;** button in that row, and then select "Create key".

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (103).png>)

Keep your service account JSON key stored somewhere. It will be used in the next step.

The format of the key may differ depending on how it is generated. Keys created using the GCP Console or the `gcloud`command-line tool look like this:

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

While keys generated with the REST API or client libraries look like this:

```
{
"name": "projects/[PROJECT-ID]/serviceAccounts/[SERVICE-ACCOUNT-EMAIL]/keys/[KEY-ID]",
"privateKeyType": "TYPE_GOOGLE_CREDENTIALS_FILE",
"privateKeyData": "[PRIVATE-KEY]",
"validAfterTime": "[DATE]",
"validBeforeTime": "[DATE]",
"keyAlgorithm": "KEY_ALG_RSA_2048"
}
```

## Set Firebase credentials in superQuery

Open superQuery and click on your Profile icon in the Resource Panel. Then, go to "**Settings**".

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (98).png>)

Under "**Team Caching**" click the "Private" button and select "Google &mdash; Firebase" from the dropdown. Then click on "**Set credentials**" to enter your Firebase details.

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (99).png>)

Enter your project ID, then copy and paste the JSON key of your service account.

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (104).png>)

## Activate Team Caching

Finally, execute any query twice in a row to activate team caching.

Once you've done that, a cache table called "superQueryCache" will be available in the Firebase database you connected to.

Your query's results will come from cache when you see "**100% saved**" next to your query's cost in the dry run, like below.

If results come from cache, you will see a message appear above your results like below. If you wish to generate fresh results not from cache, click on **refresh without cache** in your results tab. Hovering over the message will also show the "Last refresh time", which tells you how fresh the data is.

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (105).png>)
