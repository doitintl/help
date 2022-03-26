---
description: Query DynamoDB with standard SQL syntax
---

# Connect DynamoDB

In this post, you'll learn how to query tables located in DynamoDB databases using SQL syntax in superQuery

With DynamoDB connected, you'll be able to:

* Perform table joins &mdash; even across regions.
* Run aggregations without any ETL.
* Export all results &mdash; not just one page at a time.
* Get faster Scan results with parallel execution.
* &hellip;and much more!

Let's get started!

## Navigate to DynamoDB connection pop-up

&#x20;Under "Resources", click on the "**+**" sign next to the Connections tab.

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (59).png>)

Next, under "Available Integrations" click on the "Connect" button that appears next to "DynamoDB".

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (64).png>)

A modal will appear for you to enter your AWS Athena credentials:

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (65).png>)

## Enter your DynamoDB credentials

First, give your connection any name you'd like. Then, select which region(s) you want to connect to.

### Authentication

There are two ways to connect DynamoDB to superQuery

1. Using Account Access Keys
2. Connecting via your IAM Role ARN

**Method #1: Use your Account Access Keys**

In this first method, you'll just need to enter your Access key and Secret Access key from AWS.

In order to get your **Access Key ID** and **Secret Access Key** follow these steps:

1. Open the [IAM console](https://console.aws.amazon.com/iam/home?#home).
2. From the navigation menu, click **Users**.
3. Select your IAM username.
4. Click **User Actions**, and then click **Manage Access Keys**.
5. Click **Create Access Key**.

Your keys will look something like this:

* Access key ID example: AKIAIOSFODNN7EXAMPLE
* Secret access key example: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

Finally, click **Download Credentials**, and store the keys in a secure location.

#### Method #2: Connect via your IAM Role ARN

An IAM role is an IAM identity that you can create in your account that has specific permissions.

[Amazon Resource Name (ARN)](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference\_identifiers.html#identifiers-arns) formatting is used to uniquely identify AWS resources &mdash; in this case, your IAM role.

Example formatting: arn:aws:iam::account-id:role/role-name

**Creating an IAM Role**

In this second method, you will need to create an IAM role with sufficient permissions in AWS through which superQuery will access DynamoDB.

Here's how:

1. Open IAM, and under "**Access Management**" click on "Roles"
2. Click on "Create role" and select "Another AWS account"
3. Enter 717898102007 in the "Account ID" text box. This is superQuery's account ID.
4. Click "Next" and add the policy "**AmazonDynamoDBFullAccess**"
5. Give your new role a name and click "Create role"

Once you've completed these steps, you'll have the information needed to provide the IAM Role ARN in superQuery, using the formatting mentioned above.

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (67).png>)

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (68).png>)

## Query a DynamoDB table

Your DynamoDB data is stored and categorized in three levels of hierarchy.

Once you've successfully authenticated and a query result location has been set, your DynamoDB connection will appear in superQuery as one of your main folders as "dynamo-AKIAXXXXXXXXXXXX".

Under that, you will see the next level of information appear with the names of the region(s) you selected.\
\
Finally, you'll find your tables under the region you select.

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (69).png>)
