---
description: How to query data stored in S3 from superQuery
---

# Connect AWS Athena

In this article, we will explore how to connect your AWS Athena to superQuery so you can query data stored in S3 from the superQuery interface.

Once connected, you will be able to enjoy other capabilities you don't have in the traditional AWS Athena interface such as:

* Create more than five [tabs](../superquery-editor/query-tabs.md)
* Organize tabs into folder-like [Boards](../superquery-editor/organizing-queries.md)
* Produce [ad-hoc visualizations](../superquery-editor/charts.md) of query results
* Version control your queries to [GitHub](../git-integrations/connect-github.md) or [GitLab](../git-integrations/connect-gitlab.md)
* &hellip;and much more!

Let's get started.

## Navigate to AWS Athena connection pop-up

Under "Resources", click on the "**+**" sign next to the Connections tab.

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (59).png>)

Next, under "Available Integrations" click on the "Connect" button that appears next to "Athena".

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (58).png>)

A modal will appear for you to enter your AWS Athena credentials:

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (60).png>)

## Enter AWS Athena credentials

There are two ways to connect AWS Athena to superQuery, all depending on your preference. However, each method begins with the same two steps:

1. Give your connection any name you'd like.
2. Select which region(s) you want to connect to.

### Choose your authentication method

#### Method #1: Use your Access keys

In order to get your **Access Key ID** and **Secret Access Key** follow these steps:

1. Open the [IAM console](https://console.aws.amazon.com/iam/home?#home).
2. From the navigation menu, click **Users**.
3. Select your IAM user name.
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

In this second method, you will need to create an IAM role with sufficient permissions in AWS through which superQuery will access AWS Athena.

Here's how:

1. Open IAM, and under "**Access Management**" click on "Roles"
2. Click on "Create role" and select "Another AWS account"
3. Enter 717898102007 in the "Account ID" text box. This is superQuery's account ID.
4. Click "Next" and add the policies: "**AmazonAthenaFullAccess**" and "**AmazonS3FullAccess**" \*
5. Give your new role a name and click "Create role"

\* If you'd prefer not to give FullAccess permissions, you may give these specific permissions instead:

* athena-specific-dataset
* allow-s3-athena-output
* allow-s3-athena-data

Once you've completed these steps, you'll have the information needed to provide the IAM Role ARN in superQuery, using the formatting mentioned above.

To grab the IAM Role ARN, open IAM, and search for the Role you created. Click on the role and under the Summary, copy the value next to "Role ARN".

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (61).png>)

### Choose your query result location

For the last part of your Athena setup, you'll need to choose among three options for where your query results are stored:

1. Default Workgroup
2. An S3 Bucket you specify
3. Another Workgroup

#### Option #1: Save results to default workgroup

By default, each AWS account has a primary workgroup and the default permissions allow all authenticated users access to this workgroup.

Before choosing to save results to your default workgroup, make sure that a query result location is defined.

To check this, go to your Workgroup tab from the Athena UI, select the radio button next to the primary workgroup, and then click "View Details".

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (62).png>)

#### Option #2: Specify an S3 Bucket

If you'd like to explicitly tell superQuery which bucket to save query results in, choose this option.

Paste your query result location link here.

#### Option #3: Specify a Workgroup

If you'd like to save results to a workgroup that isn't the primary workgroup, enter that workgroup's name here.

Much like with option #1, make sure that a query result location is defined for the workgroup you'd like to use.

## Start Querying

Your Athena data is stored and categorized in three levels of hierarchy.

Once you've successfully authenticated and a query result location has been set, your Athena connection will appear in superQuery as one of your main folders.

Under that, you will see the next level of information appear with the naming convention of \[**region**-**database**].\
\
Finally, you'll find your tables in the database you select.

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (63).png>)
