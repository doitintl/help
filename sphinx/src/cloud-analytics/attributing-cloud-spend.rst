.. _cloud-analytics_attributing-cloud-spend:

Attribute Cloud Spend
=====================

.. epigraph::

   How to group resources into Attributions, and then use those Attributions in your Cloud Reports.

Attributions are a flexible way to group resources and their associated costs, helping you understand the cloud costs and relate them to the business in your `Cloud Reports <https://help.doit-intl.com/cloud-analytics/create-cloud-report>`__.

You may have various components of your application(s) spread across different projects, using different services. Attributions allow you to combine everything into something coherent.

.. IMPORTANT::

   Required Permissions: **Cloud Analytics**

Creating an Attribution
-----------------------

To create an attribution:

#. Click on the Cloud Analytics icon on the left hand navigation panel
#. Switch to the Attributions tab
#. Click the "**NEW ATTRIBUTION**" button

.. image:: ../_assets/attribution.png
   :alt: A screenshot showing the location of the items listed above

Next, you will be taken to an attribution creation page, where you will configure its conditions and settings.

To start, give your Attribution a name that gives some context. In our example, we'll be creating attributions to group costs for different teams: production, dev, and ops.

If you want to give even more context to your Attribution, you may give it a description by clicking on the icon at the far-right end of the text box.

.. image:: ../_assets/attributions_name.jpg
   :alt: A screenshot showing the location of the _Description_ icon

Now it's time to configure the conditions, or the criteria, which will determine what falls under your Attribution. You have the option to either set as meet "**ALL**" or "**ANY**" of the conditions. This will switch between "AND" to "OR" relations.

.. image:: ../_assets/all-any.png
   :alt: A screenshot showing the location of the items listed above

You will have every cloud billing dimension to choose from; as well as any custom, project, and system labels. Select the field(s) you'd like to include as part of your Attribution from the dropdown:

.. image:: ../_assets/attributions.png
   :alt: A screenshot showing the dropdown menu

From there, filter your selections either by keyword, exclusion, or regular expression just as you would do in Cloud Analytics Reports. Continuing our example from above, let's filter for projects which the production team uses.

.. image:: ../_assets/attributions_filter.jpg
   :alt: A screenshot showing the _Filter Projects_ form

Finally, click "Save" to apply the filter on your condition.

Once you've set a condition, a quick preview will appear showing your attribution's costs over the last 30 days. This will continue to update as you add more conditions. This way, you can easily validate the conditions of your attribution.

.. image:: ../_assets/attributions-team-prod.jpg
   :alt: A screenshot showing a graph for the last 30 days

Using our example from above, we will also create similar attributions for dev and ops teams.

.. TIP::

   You should **not** set multiple separate conditions with the same field — unless there is an exclusion set up in one of those conditions.

Using Attributions in Cloud Analytics Reports
---------------------------------------------

Finally, once an attribution is created, you'll be able to use it your Cloud Analytics Reports by  adding the Attributions chip to the break-out/group-by section, or by filtering them.

Note the "Attribution" chip in the group-by section for Report below:

.. image:: ../_assets/attributions_cloudreports-2.jpg
   :alt: A screenshot showing the a _Cloud Analytics_ report

In the event that you have many attributions, make sure to click on the Attribution chip to filter the ones you want to include in your report.

In the example above, we made sure to filter for the production, dev, and ops team attributions we created earlier.

.. image:: ../_assets/filterattributions-2.jpg
   :alt: A screenshot showing the _Filter attributions_ form

View the bite-sized video below for a closer look at Attributions and using them in your Cloud Reports.

.. raw:: html

   <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://www.loom.com/embed/8d36dbd796c84d51a26b3f836226c883" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="encrypted-media;"></iframe></div>
