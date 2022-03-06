.. _amazon-web-services_link-account:

Link your AWS Account
=====================

.. epigraph::

   Unlock additional Cloud Management Platform features by linking your AWS account

By linking your AWS account/s, you will unlock additional functionalities such as proactive resource quota monitoring and more.

In order to link your AWS account(s) to the Cloud Management Platform, you will need to create an AWS IAM Role and attach IAM Policies to it. The policies you need to attach depend on the feature(s) you'd like to enable.

In this article, we will go over how to create an IAM role with the required policies 1) automatically via CloudFormation and 2) manually.

.. HINT::

   Looking for instructions on `how to set up CloudHealth IAM role <https://www.cloudhealthtech.com/blog/cloud-governance-aws-iam-permissions>`__?

.. IMPORTANT::

   Required Permission**: Manage Settings**

Both the automatic and manual set up process start with you logging into the `Cloud Management Platform <https://app.doit-intl.com>`__, and navigating to the Settings page via the gear icon in your lefthand navigation panel.

Then switch to the Amazon Web Services tab, and click on the "Link Account" button.

.. image:: ../_assets/image\ (42)\ (1).png
   :alt: A screenshot showing the location of the Link Account button

Automatically Link AWS Account
------------------------------

Select the "**Create a role automatically**" radio button, then check the boxes next to the features you'd like to enable for this AWS account.

To explore what AWS policies each feature requires, click the "**v**" button to the left of the feature name to expand the list of policies.

.. image:: ../_assets/image\ (54).png
   :alt: A screenshot showing the location of the v button

There are two options for creating the role with this method:

#. Creating a stack in CloudFormation
#. Copy + Pasting a command in CloudShell

Option 1: Create stack in CloudFormation
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

After selecting the features, click on "**Link Account**". This will open AWS CloudFormation in a new tab, so you can create a stack template that'll generate the role with the requisite permissions. Before opening CloudFormation, you will be asked to confirm the action again by clicking "**Link Account**".

.. image:: ../_assets/image\ (35).png
   :alt: A screenshot of the confirmation dialog box

A preconfigured stack template like the one below will appear in your CloudFormation tab.

Review the details, then under "Capabilities" mark the "I acknowledge that AWS CloudFormation might create IAM resources with custom names" checkbox. Finally, click on the **"Create stack** " button.

.. image:: ../_assets/image\ (37)\ (1).png
   :alt: A screenshot showing the location of the _Capabilities_ section

Within approximately 30 seconds of creating the stack, the Settings page in CMP will update, showing your linked AWS account with a "**Healthy**" status next to it if the link attempt was successful.

Option 2: Create role via CLI
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you prefer to run the commands yourself in AWS CloudShell, click on the "**Prefer CLI?**" button instead. A pop-up will appear with the commands you should run to generate the role with the requisite policies for the features you selected. After running the command, it may take up to 30 seconds for the account to link to the CMP.

.. image:: ../_assets/image\ (39)\ (1).png
   :alt: A screenshot of the AWS CLI Instructions dialog box

Within approximately 30 seconds of running the command, the Settings page in CMP will update, showing your linked AWS account with a "**Healthy**" status next to it if the link attempt was successful.

Manually Link AWS Account
-------------------------

Select the "**Create a role manually**" radio button, then note the listed "AWS Account" and "External ID", as you'll need them for a later step.

.. image:: ../_assets/image\ (38)\ (1).png
   :alt: A screenshot showing the location of the AWS Account and External ID values

Creating an AWS IAM Role
^^^^^^^^^^^^^^^^^^^^^^^^

In a separate tab, open the AWS Management Console. Next, go to 'Security, Identity, & Compliance > IAM', or type 'IAM' in the 'Find Services' search bar and click on 'Roles', located on the left-hand side of the page.

Then choose 'Create Role'.

.. image:: ../_assets/go-to-roles.png
   :alt: A screenshot showing the location of the Roles menu item

Enter the AWS Account ID and External ID you've noted in the previous step. You might need to check the 'Options' checkbox for the External ID field to show up.

.. image:: ../_assets/account-and-external-id.png
   :alt: A screenshot showing the Options checkbox

This will take you to a page where you can select built-in policies and/or create a new one.

Currently, there are three features you can enable for a linked AWS account: **Core**, `Quotas <https://help.doit-intl.com/amazon-web-services/add-your-amazon-web-services-iam-role#quota-monitoring>`__, **and** `SpotScaling <https://help.doit-intl.com/amazon-web-services/add-your-amazon-web-services-iam-role#spot-scaling>`__

**Core** permissions are for a minimum set of read-only permissions we need as a foundation for many CMP features. As such, it is checked by default.

For Core, you need to add three built-in policies to your role:

* SecurityAudit
* Billing
* AWSSavingsPlansReadOnlyAccess

To add permissions for other features, you'll need to create a new policy. If you wish to enable this feature, click "**Create policy**".

.. image:: ../_assets/create-policy-in-role.png
   :alt: A screenshot showing the location of the Create policy button

Creating new policies
^^^^^^^^^^^^^^^^^^^^^

Spot Scaling
~~~~~~~~~~~~

A new tab will open for you to create the policy. Switch to the "JSON" tab and copy-paste the following list of required permissions as a JSON file:

.. code-block:: json

   {
       "Version": "2012-10-17",
       "Statement": [
           {
               "Action": [
                   "ec2:Describe*",
                   "ec2:CreateLaunchTemplate",
                   "ec2:CreateLaunchTemplateVersion",
                   "ec2:ModifyLaunchTemplate",
                   "ec2:RunInstances",
                   "ec2:TerminateInstances",
                   "ec2:CreateTags",
                   "ec2:DeleteTags",
                   "ec2:CreateLaunchTemplateVersion",
                   "ec2:CancelSpotInstanceRequests",
                   "autoscaling:CreateOrUpdateTags",
                   "autoscaling:UpdateAutoScalingGroup",
                   "autoscaling:Describe*",
                   "autoscaling:AttachInstances",
                   "autoscaling:BatchDeleteScheduledAction",
                   "autoscaling:BatchPutScheduledUpdateGroupAction",
                   "cloudformation:ListStacks",
                   "cloudformation:Describe*",
                   "iam:PassRole",
                   "events:PutRule",
                   "events:PutTargets",
                   "events:PutEvents"
               ],
               "Resource": "*",
               "Effect": "Allow"
           }
       ]
   }

.. image:: ../_assets/cleanshot-2021-06-09-at-15.12.51.jpg
   :alt: A screenshot of the JSON tab

After the JSON for the new policy you want to create is pasted, click "**Next: Tags**". If you aren't adding tags to this role, then you may proceed by clicking on "**Next: Review**".

Finally, give your policy an identifiable name, like "spotscaling_policy", and a description if necessary. Then click on "**Create Policy**".

.. image:: ../_assets/cleanshot-2021-06-09-at-15.11.55.jpg
   :alt: A screenshot of the Review policy screen

:doc:`Quota Monitoring <aws-quotas>`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A new tab will open for you to create the policy. Switch to the "JSON" tab and copy-paste the following list of required permissions as a JSON file:

.. code-block:: json

   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "support:DescribeTrustedAdvisorCheckSummaries",
           "support:DescribeTrustedAdvisorCheckRefreshStatuses",
           "support:DescribeTrustedAdvisorChecks",
           "support:DescribeSeverityLevels",
           "support:RefreshTrustedAdvisorCheck",
           "support:DescribeSupportLevel",
           "support:DescribeCommunications",
           "support:DescribeServices",
           "support:DescribeIssueTypes",
           "support:DescribeTrustedAdvisorCheckResult",
           "trustedadvisor:DescribeNotificationPreferences",
           "trustedadvisor:DescribeCheckRefreshStatuses",
           "trustedadvisor:DescribeCheckItems",
           "trustedadvisor:DescribeAccount",
           "trustedadvisor:DescribeAccountAccess",
           "trustedadvisor:DescribeChecks",
           "trustedadvisor:DescribeCheckSummaries"
         ],
         "Resource": "*"
       }
     ]
   }

After the JSON for the new policy you want to create is pasted, click "**Next: Tags**". If you aren't adding tags to this role, then you may proceed by clicking on "**Next: Review**"

.. image:: ../_assets/image\ (50)\ (1).png
   :alt: A screenshot of the JSON tab

Give your policy an identifiable name, like "doit_intl_quotas" in the case of the Quota Monitoring feature, and a description if necessary. Then click on "**Create Policy**".

.. image:: ../_assets/image\ (48).png
   :alt: A screenshot of the Review policy screen

If the policy was successfully created, you'll be taken to the IAM Policies page and see a success message at the top like the following:

.. image:: ../_assets/image\ (43)\ (1).png
   :alt: "doit_intl_quotas has been created"

Select all policies and confirm role
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Once any custom policies (if necessary) have been created, revert back to your original tab where the workflow first began, and click the Refresh icon towards the top-right of the policies box. Any newly-created policies will now appear in the search list.

Select all created policies for the features you want to enable in addition to the three built-in policies required for Core features, then click "**Next: Tags**".

If you aren't adding tags to this role, then you may proceed by clicking on "**Next: Review**" from the "Add Tags" page.

.. image:: ../_assets/choose-policy.png
   :alt: A screenshot showing the location of the policy selection box

Give the Role an identifiable name (ex. 'doit-intl-cmp-role'), review the selected policies, and click on "**Create role**".

.. image:: ../_assets/image\ (41).png
   :alt: A screenshot of the Create role screen

If the role was created successfully, you'll be taken back to the main Roles page and see your Role in the list.

After you have created the role, click on the role name to bring you to its summary page. Copy the value next to "**Role ARN**"

.. image:: ../_assets/image\ (44)\ (1).png
   :alt: A screenshot of the _Create Role_ form

Finally, copy and paste the Role ARN to the Cloud Management Platform and click 'Add'.

If the status of your AWS account within the Cloud Management Platform appears as 'Healthy', it means the role was added successfully.

.. image:: ../_assets/image\ (53).png
   :alt: A screenshot showing the location of the Status column

Editing Linked Accounts
-----------------------

Unlinking an account
^^^^^^^^^^^^^^^^^^^^

If you want to unlink an account, click on the "Unlink" button in the row corresponding to the account.

.. image:: ../_assets/image\ (46)\ (1).png
   :alt: A screenshot showing the location of the Unlink button

Modifying feature access
^^^^^^^^^^^^^^^^^^^^^^^^

Adding a feature
~~~~~~~~~~~~~~~~

If, after linking your AWS account, you'd like to update your role with additional permissions for a new feature, click on the "Edit" button in the row corresponding to the account.

.. image:: ../_assets/image\ (34).png
   :alt: A screenshot showing the location of the Edit button

Then, check the box of any new feature(s) you'd like to add permissions for.

.. image:: ../_assets/image\ (52).png
   :alt: A screenshot showing the location of the options button

There are two options for updating your role:

#. :doc:`Creating a stack in CloudFormation <link-account>`
#. :doc:`Copy + Pasting a command in CloudShell <link-account>`

Both methods are detailed above (and hyperlinked) in the section on linking your AWS account automatically.

The flows are essentially the same as described above, except instead of creating a new role you are simply updating a role you've already created.

Removing a feature
~~~~~~~~~~~~~~~~~~

To remove a feature that a linked account has access to, go to the IAM page in the AWS console. Then, detach the policy or policies associated with the feature in that linked account's role.

Video
-----

.. raw:: html

   <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://www.loom.com/embed/ed483a87c6474c22ae735ec7d19e2215" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="encrypted-media;"></iframe></div>
