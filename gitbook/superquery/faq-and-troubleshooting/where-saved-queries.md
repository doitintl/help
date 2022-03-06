# "Where are my Saved Queries?"

In this article we will go over why there isn't a **Saved Queries** feature in superQuery, and why categorizing your queries into **Boards** is a _much_ better alternative.

Before we go over why superQuery doesn't have a Saved Queries feature, it's important to go over why this feature exists in Google BigQuery in the first place.

## Queries don't persist in BigQuery

If you refresh a page running Google BigQuery, any SQL you had written in your query editor will disappear.&#x20;

Because queries don't persist in BigQuery over time, Google offers the "**Saved Queries**" feature for you to quickly access queries you use frequently &mdash; or perhaps just don't want to rewrite again.

Now let's explore why you don't need Saved Queries in superQuery.

## Queries DO persist in superQuery Tabs

When working in superQuery Tabs, the experience is similar to that of working in a Google Doc &mdash; your work auto-saves. That way, you don't need to fret about saving the latest version of your query.

The only way a query will disappear is if you erase it yourself, or delete the tab it's stored in.

## How do you organize superQuery Tabs?

Instead of having a single Saved Queries folder, you can create multiple **Boards** in superQuery.&#x20;

Think of boards as workspaces for grouping related queries together and categorizing them.

You could have one board with three queries dedicated to Website Analytics, and another board containing queries for Marketing Campaigns, as illustrated below.

From the perspective of query management, this is a much better alternative than having a single list of many unrelated queries.

<!-- markdownlint-disable-next-line -->
![](<../.gitbook/assets/image (4).png>)

## What about private and project-level saved queries?

By default, all of your queries and boards are private. If you'd like to share your board(s) with others &mdash; our equivalent of project-level queries &mdash; you can do so in three clicks.

When you share access to a board, you can choose to give View or Edit access.

### View Access

Users with View access will not be able to edit the SQL of queries in the shared Board. They can do the following in your board:

* Run queries &mdash; these will be executed on the account of the Board creator, not your own.
* View the SQL of the queries.
* Copy the SQL and paste it into their own board.
* Access the dashboard view of your board.
* Modify your variable(s) values if they exist and refresh the dashboard &mdash; any query affected by the changed value will be charged to the billing project of the board admin.

### Edit Access

Users with Edit access can do all of the above, as well as modifying the SQL inside of a query tab.

The one caveat is that when you run a query with Edit access, the query is executed against your account, not the Board's creator.

## Can I migrate my Saved Queries into superQuery?

Unfortunately, BigQuery doesn't have a Saved Queries API that allows us to pull your Saved Queries just yet. It is a [popular feature request](https://issuetracker.google.com/issues/111961970), so we encourage you to upvote the request there.
