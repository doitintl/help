---
description: Answers to commonly-asked data privacy & security-related questions
---

# Data and Security FAQ

### Does superQuery store my sensitive data?

No. superQuery provides a non-intrusive web IDE and query optimization service **on top** of Google BigQuery’s database.\
&#x20;\
As such, we don’t store any customer data, but rather serve as a pass-through for the user’s query from our web IDE to our query optimization engine, and from there to Google BigQuery which will ultimately execute the query.

### What data does superQuery receive and transmit?

As part of the query optimization process, superQuery processes the query’s metadata and the user’s metadata, and thus optimizes the query, improving query performance and reducing the query’s cost in many cases.

### What scopes do you request access to in order for a user to use superQuery?

We ask for two [Google OAuth 2.0 scopes](https://developers.google.com/identity/protocols/googlescopes#bigqueryv2), which tell us what we are allowed to do on behalf of the user. Even if we have scopes, it doesn’t mean we have permission to do anything.&#x20;

Permissions are managed and defined by the user's GCP admin(s) in Google IAM and apply in superQuery as well.

We request the following scopes:

[https://www.googleapis.com/auth/bigquery](https://www.googleapis.com/auth/bigquery) — View and Manage your data in Google BigQuery

[https://www.googleapis.com/auth/cloud-platform](https://www.googleapis.com/auth/cloud-platform) — View and manage your data across Google Cloud Platform services

### **Why do you need access to these scopes?**

The [first scope](https://www.googleapis.com/auth/bigquery) allows the user to query their BigQuery data via the superQuery interface.

The [second scope](https://www.googleapis.com/auth/cloud-platform) is required for use cases when a user wants to access other Google Cloud Platform services.&#x20;

For example:

* Querying data stored in a Google Sheet in Google Drive
* Opening query results in a Google Sheet.
* Connecting your GCS Bucket so that downloaded results get stored there.

### Does superQuery manage user access privileges to BigQuery tables and data?

No, superQuery passes the user's OAuth 2.0 Token to BigQuery as part of the query execution process. User access privileges are enforced by BigQuery based on your team's [Google IAM settings](https://console.cloud.google.com/iam-admin/iam?project=tamir-215609\)).

### My company is sensitive to the usage of Chrome extensions — is there another way we can use superQuery?

Yes. superQuery is a web-based IDE that you can access simply by logging in through the main [website](http://web.superquery.io). In fact, it's our preferred way of using superQuery

### Do you base your security program on a recognized security standard?

Our security program guidelines are based on [OWASP’s top 10 security risks](https://www.owasp.org/index.php/Category:OWASP\_Top\_Ten\_Project).\
