---
description: AWS root credentials and account access
---

# AWS root credentials

We require access to each AWS Master Payer Account (MPA) root credentials to complete certain elements of the account transition and maintenance. We store these credentials in a secure vault and limits access to a specific set of employees. We audit this access and constrain it to only the few situations in which we need the credentials. DoiT International transfers control of these credentials to your ownership if you end the partnership with us.

**Why must you hold root credentials for AWS accounts?**

We hold the root credentials to secure AWS accounts and prevent fraudulent usage because security compromise is critical to our management of AWS Master Payer Accounts accounts. AWS specifies several Identity and Access Management best practices to minimize the risk of account compromise. These include locking away the AWS account root user access keys and enabling multi-factor authentication (MFA). By holding the root permission and credentials, we can enforce these best practices on AWS accounts.

Amazon requires its partners such as DoiT International to use these root credentials to communicate with Amazon's billing department to address billing issues.

We set the root user's email address to a unique DoiT-owned email account. Automation creates and updates tickets in our ticketing systems based on emails sent to that email address. This lets our Customer Reliability Engineering to share important account updates with you through tickets.

**How are my team and I impacted by not holding our AWS account root user credentials?**

You can manage all access as either:

- Users within the DoiT [Cloud Management Platform](https://app.doit-intl.com)
- IAM Roles for AWS resources, such as EC2 instances

For the specific tasks that require AWS account root user permission, a small set of DoiT staff can carry out the tasks.

**How does DoiT International secure and store root credentials?**

After we update the credentials for the root user of the AWS account to a DoiT-provided email address, we generate a new strong password and enable multi-factor authentication for the AWS account. We encrypt the new password and vault it by using specialized software.

Our tools and employees accomplish most AWS account management by using IAM roles and users.

**How does DoiT release root credentials?**

There are two relevant scenarios: the closure of an account and a reverse assumption (customers taking billing ownership of accounts). If you close an account, root credentials lead to a _dead end_ so we don't need to destroy them.

When customers terminate management services with DoiT International, we follow a _reverse assumption_ process. This includes changing the root user credentials to those defined by the customer.
