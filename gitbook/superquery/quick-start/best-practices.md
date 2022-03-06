---
description: Start using superQuery with these power tips
---

# Best Practices

If you follow some of these starter tips, you'll see an immediate boost to your productivity.

## #1 &mdash; Group related queries into Boards

[Boards](../superquery-editor/organizing-queries.md) are like folders for organizing your [query tabs](../superquery-editor/query-tabs.md). They're a huge upgrade over Saved Queries, helping you to better manage your queries in sub-groupings, rather than one long list.

Organize queries in a way that makes sense for your work &mdash; by work project, department, etc.

<!-- markdownlint-disable-next-line -->
![](../.gitbook/assets/image.png)

## #2 &mdash; Give your query Tabs and Boards identifiable names

As you create more [query tabs](../superquery-editor/query-tabs.md) and boards, it will be easier for you to identify them if you give them good names from the start.\
&#x20;\
The names should be **descriptive** enough that it is obvious to you what query the tab contains. Or, in the case of Boards, which queries the board contains.

<!-- markdownlint-disable-next-line -->
![](../.gitbook/assets/BoardTabName.jpg)

## #3 &mdash; Use variables to save time when modifying queries

[Variables](../superquery-editor/variables.md) are placeholders for values that can change &mdash; for example, field values in the WHERE clause. They make your queries more dynamic and allow you to perform quick edits on your query without modifying the SQL itself.

If you're constantly modifying field values (ex. item id, user id, user events, dates, etc.), then variables will save you **TONS** of time.

Creating a variable is incredibly easy &mdash; in fact, there is no SQL required when creating variables in the superQuery UI.

To create a variable, \[1] choose a data type,  \[2] give your variable a name, and \[3] assign it an initial value.&#x20;

In our example below, we're analyzing eCommerce store data, and thus creating a variable called "category" and assigning it a value of "Bags"

<!-- markdownlint-disable-next-line -->
![](../.gitbook/assets/VariablesSetup.jpg)

Once created, insert the variable into your query in place of a literal value. The variable "holds" whatever value you assigned it.

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/CleanShot 2021-02-22 at 10.46.53.jpg>)

Changing your variable's value is also easy. Just enter a new value at the top, as shown below.&#x20;

This replaces having to perform a CTRL-F and selecting "Replace All", you just have to insert a variable and change its value at the top once.

![Changing a variable's value](../.gitbook/assets/ChangeVariable.gif)

## #4 &mdash; Visualize your query results using Charts in a single click

Viewing query results in a [chart](../superquery-editor/charts.md) offers a perspective that tables don't. It's much easier to spot anomalies and see the full picture.

For ad-hoc visualizations, you may opt to export to Google Sheets or your BI tool, but that requires too many steps for something that is ad-hoc.

Use superQuery's **Charts** feature to generate a quick visualization of your query results. This'll help you avoid any unnecessary back-and-forth when/if the query becomes something you'd like to visualize in your BI tool.

<!-- markdownlint-disable-next-line -->
![](../.gitbook/assets/ChartsSQ.gif)

## #5 &mdash; Connect your Github repo or GitLab project to superQuery

For many, code management and tracking changes to queries is important. Most of the time, however, this is done manually. Too much time is spent comparing code versions, trying to figure out what part of the query was changed.

With superQuery's [GitHub](../git-integrations/connect-github-org.md) and [GitLab](../git-integrations/connect-gitlab.md) integrations, you'll be able to version control your queries and views. This way, you and your team will always have a record of changes made to your BigQuery work.

Your queries are also cataloged for you in a simple hierarchy (User > Board > Tab) inside of your repo/project.
