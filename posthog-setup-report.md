<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent Next.js App Router project. The following changes were made:

- **`instrumentation-client.ts`** (new file): Initializes PostHog client-side using the Next.js 15.3+ recommended `instrumentation-client.ts` approach. Configured with a reverse proxy path (`/ingest`), exception capture for error tracking, and debug mode in development.
- **`next.config.ts`**: Added reverse proxy rewrites so PostHog requests route through `/ingest` to reduce tracking-blocker interference. Also enabled `skipTrailingSlashRedirect` as required by PostHog.
- **`components/ExploreBtn.tsx`**: Added `explore_events_clicked` capture when the user clicks the "Explore Events" CTA button.
- **`components/EventCard.tsx`**: Converted to a client component and added `event_card_clicked` capture (with `event_title`, `event_slug`, `event_location`, and `event_date` properties) when the user clicks an event card.
- **`.env.local`**: Populated `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables (covered by `.gitignore`).

## Events

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" button on the homepage hero section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to view event details (captures title, slug, location, date) | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics](https://us.posthog.com/project/336445/dashboard/1343751)
- **Insight**: [User Engagement - Explore & Event Clicks](https://us.posthog.com/project/336445/insights/V9ojJsNe) — Daily trend of both tracked events
- **Insight**: [Explore-to-Click Conversion Funnel](https://us.posthog.com/project/336445/insights/mOrl5aic) — Funnel from CTA click to event card click
- **Insight**: [Most Popular Events by Clicks](https://us.posthog.com/project/336445/insights/wcvEH9Yl) — Bar chart of which events get the most interest
- **Insight**: [Weekly Active Users - Event Engagement](https://us.posthog.com/project/336445/insights/cFB63VPL) — Weekly unique users engaging with event cards

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
