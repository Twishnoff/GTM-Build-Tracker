// Generated from the live tracker. Do not edit by hand.
window.PLAN = {
 "updated": "Oct 29, 4:30 PM",
 "days": [
  {
   "date": "2026-10-12",
   "day": 1,
   "goal": "Work from a local clone of both repos and run a Worker locally.",
   "tasks": [
    {
     "done": true,
     "id": "d01-1",
     "text": "Install Git, GitHub CLI and VS Code; clone both repos"
    },
    {
     "done": true,
     "id": "d01-2",
     "text": "Learn the six daily git commands"
    },
    {
     "done": true,
     "id": "d01-3",
     "text": "Run battle-card-generator locally with wrangler dev"
    },
    {
     "done": true,
     "id": "d01-4",
     "text": "Make a trivial change on a branch, open and merge a PR"
    }
   ],
   "title": "Local clones and the dev loop",
   "id": "d01"
  },
  {
   "date": "2026-10-13",
   "day": 2,
   "goal": "All ten Workers in one repo; cold-email domain starts warming.",
   "tasks": [
    {
     "done": true,
     "id": "d02-1",
     "text": "Buy sending domain, two mailboxes, SPF/DKIM/DMARC, start warm-up"
    },
    {
     "done": true,
     "id": "d02-2",
     "moved": "2026-10-14",
     "text": "Create the mktforge-workers monorepo with one shared mktforge-auth.js"
    },
    {
     "done": true,
     "id": "d02-3",
     "moved": "2026-10-14",
     "text": "Move secrets out of files; .gitignore for .bak"
    },
    {
     "done": true,
     "id": "d02-4",
     "moved": "2026-10-14",
     "text": "Drop the .pre-*.bak files"
    }
   ],
   "title": "Workers into git",
   "id": "d02"
  },
  {
   "date": "2026-10-14",
   "day": 3,
   "goal": "A push to main deploys the changed Workers.",
   "tasks": [
    {
     "done": true,
     "id": "d03-1",
     "text": "GitHub Actions workflow, matrixed over Worker folders, path-filtered"
    },
    {
     "done": true,
     "id": "d03-2",
     "text": "Cloudflare API token and account ID as repo secrets"
    },
    {
     "done": true,
     "id": "d03-3",
     "text": "One smoke test per Worker (401 unauthenticated, health 200)"
    },
    {
     "done": true,
     "id": "d03-4",
     "text": "Branch protection on main: PR required, CI must pass"
    }
   ],
   "title": "CI deploys",
   "id": "d03"
  },
  {
   "date": "2026-10-15",
   "day": 4,
   "goal": "A written list of the events that define activation, before any code.",
   "tasks": [
    {
     "done": true,
     "id": "d04-0",
     "text": "Create the Apollo free account with tyler@getmktforge.com, verify, confirm search works (15 min)"
    },
    {
     "done": true,
     "id": "d04-1",
     "text": "Sign up for PostHog; read the event naming guide (60 min)"
    },
    {
     "done": true,
     "id": "d04-2",
     "text": "Write the event taxonomy in a doc"
    },
    {
     "done": true,
     "id": "d04-3",
     "text": "Define the properties every event carries"
    },
    {
     "done": true,
     "id": "d04-4",
     "text": "Define “activated” in one sentence; commit docs/analytics-events.md"
    },
    {
     "done": true,
     "id": "d04-5",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Event taxonomy",
   "id": "d04"
  },
  {
   "date": "2026-10-16",
   "day": 5,
   "goal": "Browser events flowing from mktforge.io and app.mktforge.io.",
   "tasks": [
    {
     "done": true,
     "id": "d05-1",
     "text": "Add the PostHog snippet to site and app; identify on sign-in"
    },
    {
     "done": true,
     "id": "d05-2",
     "text": "Fire signup, verification, key-added, company-created events"
    },
    {
     "done": true,
     "id": "d05-3",
     "text": "Fire module_run_started from module-kit.js"
    },
    {
     "done": true,
     "id": "d05-4",
     "text": "CI check: every capture() name in the code must appear in docs/analytics-events.md"
    },
    {
     "done": true,
     "id": "d05-5",
     "text": "Walk the funnel on a fresh account and verify in live view"
    },
    {
     "done": true,
     "id": "d05-7",
     "text": "Mermaid flowchart of the lead path in the Mktforge README (20 min)"
    },
    {
     "done": true,
     "id": "d05-6",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Instrument the site and the app",
   "id": "d05"
  },
  {
   "date": "2026-10-17",
   "day": 6,
   "goal": "Workers report completed runs; one dashboard shows the funnel.",
   "tasks": [
    {
     "done": true,
     "id": "d06-1",
     "text": "Send module_run_completed from each Worker via the shared module"
    },
    {
     "done": true,
     "id": "d06-2",
     "text": "Build the activation funnel in PostHog"
    },
    {
     "done": true,
     "id": "d06-3",
     "text": "Second insight: runs per module per week, by plan"
    },
    {
     "done": true,
     "id": "d06-4",
     "text": "Backfill from Firestore so the funnel is not empty"
    },
    {
     "done": true,
     "id": "d06-5",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Server-side events and the dashboard",
   "id": "d06"
  },
  {
   "date": "2026-10-18",
   "day": 7,
   "goal": "Publish “Instrumenting a PLG funnel from scratch”.",
   "tasks": [
    {
     "done": true,
     "id": "d07-1",
     "text": "Write the post (taxonomy, funnel chart, what surprised you)"
    },
    {
     "done": true,
     "id": "d07-2",
     "text": "Two screenshots: Actions deploy log, PostHog funnel"
    },
    {
     "done": true,
     "id": "d07-3",
     "text": "Post on portfolio and LinkedIn; trade-offs line"
    },
    {
     "done": true,
     "id": "d07-4",
     "text": "Plan check: anything undone from Days 1–6 gets a Day 8 slot"
    },
    {
     "done": true,
     "id": "d07-5",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Write-up 1",
   "id": "d07"
  },
  {
   "date": "2026-10-19",
   "day": 8,
   "goal": "Decide what HubSpot should know about a Mktforge user.",
   "tasks": [
    {
     "done": true,
     "id": "d08-1",
     "text": "Close out Week 1 leftovers (2 hours max)"
    },
    {
     "done": true,
     "id": "d08-2",
     "text": "Design the mktforge_* contact properties and company set"
    },
    {
     "done": true,
     "id": "d08-3",
     "text": "Decide contact vs custom object; write the trade-off down"
    },
    {
     "done": true,
     "id": "d08-4",
     "text": "Create the properties via the API from a committed script"
    },
    {
     "done": true,
     "id": "d08-5",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Data model",
   "id": "d08"
  },
  {
   "date": "2026-10-20",
   "day": 9,
   "goal": "Workers push user state to HubSpot.",
   "tasks": [
    {
     "done": true,
     "id": "d09-1",
     "text": "Add a hubspot-sync helper to the shared module"
    },
    {
     "done": true,
     "id": "d09-2",
     "text": "Call it from mktforge-access and each module Worker"
    },
    {
     "done": true,
     "id": "d09-3",
     "text": "Service Key for your own portal"
    },
    {
     "done": true,
     "id": "d09-4",
     "text": "Queue the calls through a Cloudflare Queue"
    },
    {
     "done": true,
     "id": "d09-5",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Write-back from the Workers",
   "id": "d09"
  },
  {
   "date": "2026-10-21",
   "day": 10,
   "goal": "Every action shows on the contact timeline; lifecycle moves itself.",
   "tasks": [
    {
     "done": true,
     "id": "d10-1",
     "text": "Per-run Note on the contact (timeline-events API is partner-only)"
    },
    {
     "done": true,
     "id": "d10-2",
     "text": "Map lifecycle stages to Mktforge states"
    },
    {
     "done": true,
     "id": "d10-3",
     "text": "Lifecycle + activation set by hubspot-sync (workflows are Pro-only)"
    },
    {
     "done": true,
     "id": "d10-4",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Timeline events and lifecycle",
   "id": "d10"
  },
  {
   "date": "2026-10-22",
   "day": 11,
   "goal": "A score that ranks users, computed in the Worker, and flags the Day 18 sender acts on.",
   "tasks": [
    {
     "done": true,
     "id": "d11-1",
     "text": "mktforge_score computed in hubspot-sync (score property + workflows are Pro-only)"
    },
    {
     "done": true,
     "id": "d11-2",
     "text": "Daily cron: 14-day idle decay + nudge flag (verified, no run after 48h)"
    },
    {
     "done": true,
     "id": "d11-3",
     "text": "next_module_due flag (activated, any plan) + three email drafts (docs/emails, wired Day 18)"
    },
    {
     "done": true,
     "id": "d11-4",
     "text": "Workflow 4: score ≥ 80 → Zapier Zap: Slack post + HubSpot task + hot-accounts sheet row"
    },
    {
     "done": true,
     "id": "d11-5",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Lead score and triggered workflows",
   "id": "d11"
  },
  {
   "date": "2026-10-23",
   "day": 12,
   "goal": "HubSpot can change Mktforge, not only read from it.",
   "tasks": [
    {
     "done": true,
     "id": "d12-1",
     "text": "Webhook endpoint on mktforge-access flips the KV allowlist"
    },
    {
     "done": true,
     "id": "d12-2",
     "text": "Verify the HubSpot signature on every call"
    },
    {
     "done": true,
     "id": "d12-3",
     "text": "Run the loop end to end from HubSpot"
    },
    {
     "done": true,
     "id": "d12-4",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Webhooks back into Mktforge",
   "id": "d12"
  },
  {
   "date": "2026-10-24",
   "day": 13,
   "goal": "One HubSpot dashboard that answers “how is Mktforge doing this week”.",
   "tasks": [
    {
     "done": true,
     "id": "d13-1",
     "text": "Reports: Free-tier dashboard (stage, created by day, by source); activation + score wait for Week 4 warehouse"
    },
    {
     "done": true,
     "id": "d13-2",
     "text": "Reconcile counts with PostHog (reconcile.mjs, re-runnable); seed pre-sync history into HubSpot"
    },
    {
     "done": true,
     "id": "d13-3",
     "text": "Review all real accounts in HubSpot (6, exact match both sides)"
    },
    {
     "done": true,
     "id": "d13-4",
     "text": "mktforge_modules_run (checkboxes) + mktforge_next_module derived by hubspot-sync (email 2 copy block)"
    },
    {
     "done": true,
     "id": "d13-5",
     "text": "Examples page on mktforge.io: nine module cards, one real PDF per module; emails link straight to the PDFs"
    },
    {
     "done": true,
     "id": "d13-6",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Reporting",
   "id": "d13"
  },
  {
   "date": "2026-10-25",
   "day": 14,
   "goal": "Publish “PLG signals into HubSpot”.",
   "tasks": [
    {
     "done": true,
     "id": "d14-1",
     "text": "Write-up 2 published on LinkedIn: pipeline diagram, score logic, Zap screenshot (no workflow exists to screenshot)"
    },
    {
     "done": true,
     "id": "d14-2",
     "text": "Trade-offs note: Free-tier reports, examples page, Build Positioning stage 5 fix, squash-merge lesson"
    },
    {
     "done": true,
     "id": "d14-3",
     "text": "Clay account (already existed, Free plan); Growth trial starts Day 15 morning so its 14 days cover the campaign"
    },
    {
     "done": true,
     "id": "d14-4",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Write-up 2",
   "id": "d14"
  },
  {
   "date": "2026-10-26",
   "day": 15,
   "goal": "Every new signup is enriched by domain and written back to HubSpot.",
   "tasks": [
    {
     "done": true,
     "id": "d15-0",
     "text": "Clay Growth 14-day trial started (fresh workspace on tyler@getmktforge.com; 1K credits, 5K actions)"
    },
    {
     "done": true,
     "id": "d15-1",
     "text": "Company sync first (unplanned): My Company → HubSpot Company on the contact, primary domain as the enrichment key; 8 existing companies seeded (Workers PRs #17, #18; app PR)"
    },
    {
     "done": true,
     "id": "d15-2",
     "text": "Clay table off the Mktforge Users list: Enrich company, B2B classifier, marketing-hire count, ICP formula (gates + points, 0–100)"
    },
    {
     "done": true,
     "id": "d15-3",
     "text": "Write-back: enrichment to the HubSpot Company, ICP score to the Contact; Zap “HubSpot domain → Clay” for near-real-time rows (poll is daily)"
    },
    {
     "done": true,
     "id": "d15-4",
     "text": "Cut: My Company pre-fill from enrichment (first item on the plan’s cut list)"
    },
    {
     "done": true,
     "id": "d15-5",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Enrichment in Clay",
   "id": "d15"
  },
  {
   "date": "2026-10-27",
   "day": 16,
   "goal": "200 target accounts and 300 contacts from a repeatable process.",
   "tasks": [
    {
     "done": true,
     "id": "d16-1",
     "text": "Define the play in one paragraph (founders-trial-2026-10)"
    },
    {
     "done": true,
     "id": "d16-2",
     "text": "Source in Apollo (Pro trial): ICP filters, 107 of 432 accounts exported before the search cap"
    },
    {
     "done": true,
     "id": "d16-3",
     "text": "Clay: prospects tables, shared ICP functions, title flag"
    },
    {
     "done": true,
     "id": "d16-4",
     "text": "Find and verify one founder email per company (domain match + review)"
    },
    {
     "done": true,
     "id": "d16-5",
     "text": "Push 92 contacts to HubSpot with play / source / recency; static list"
    },
    {
     "done": true,
     "id": "d16-6",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Account sourcing",
   "id": "d16"
  },
  {
   "date": "2026-10-29",
   "day": 17,
   "goal": "One persona-driven first-touch template, dogfooded from Target Messaging (the 92 per-contact drafts were dropped: cold imports carry nothing to differentiate on).",
   "tasks": [
    {
     "done": true,
     "id": "d17-0",
     "text": "Wed: close Day 16 carry-overs (PRs merged, tracker pushed, Simantic row kept on the shared-name-token rule)"
    },
    {
     "done": true,
     "id": "d17-1",
     "text": "Thu: run the Mktforge chain on Mktforge itself (persona → positioning vs M1-Project → messaging → Target Messaging)"
    },
    {
     "done": true,
     "id": "d17-2",
     "text": "Rewrite the output into a founder-to-founder email; subject line; tokens first name + company only"
    },
    {
     "done": true,
     "id": "d17-3",
     "text": "Name the win before launch: one founder through the full loop, ~5% replies as the input"
    },
    {
     "done": true,
     "id": "d17-4",
     "text": "Save docs/emails/founders-trial-2026-10.md and the Day 17 trade-offs line in Mktforge-Website"
    },
    {
     "done": true,
     "id": "d17-5",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Personalization through Mktforge",
   "id": "d17"
  },
  {
   "date": "2026-10-30",
   "day": 18,
   "goal": "A sending setup that will not burn mktforge.io.",
   "tasks": [
    {
     "done": false,
     "id": "d18-1",
     "text": "Warm-up check: placement, blacklists, SPF/DKIM/DMARC on a test send"
    },
    {
     "done": false,
     "id": "d18-2",
     "text": "Pick the sender (HubSpot Sequences unless forced otherwise)"
    },
    {
     "done": false,
     "id": "d18-3",
     "text": "Build the 3-step sequence"
    },
    {
     "done": false,
     "id": "d18-4",
     "text": "Daily send caps (30/mailbox) and suppression list"
    },
    {
     "done": false,
     "id": "d18-5",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Sending infrastructure and deliverability",
   "id": "d18"
  },
  {
   "date": "2026-11-01",
   "day": 19,
   "goal": "Replies triaged automatically; interested ones get full context.",
   "tasks": [
    {
     "done": false,
     "id": "d19-1",
     "text": "Reply classifier Worker via HubSpot inbox webhook"
    },
    {
     "done": false,
     "id": "d19-2",
     "text": "Interested → stop sequence, create deal, attach context, Slack"
    },
    {
     "done": false,
     "id": "d19-3",
     "text": "Wrong person → templated ask approved from Slack"
    },
    {
     "done": false,
     "id": "d19-4",
     "text": "Unsubscribe → suppress across every list"
    },
    {
     "done": false,
     "id": "d19-6",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Reply handling and handoff",
   "id": "d19"
  },
  {
   "date": "2026-10-31",
   "day": 20,
   "goal": "First 60 contacts out, the rest scheduled over the week.",
   "tasks": [
    {
     "done": false,
     "id": "d20-0",
     "text": "Sat AM: refine the outreach template and the three lifecycle emails before any real send (docs/emails)"
    },
    {
     "done": false,
     "id": "d20-1",
     "text": "Final read of the template against the 92; send the first 60"
    },
    {
     "done": false,
     "id": "d20-2",
     "text": "HubSpot dashboard for the play"
    },
    {
     "done": false,
     "id": "d20-3",
     "text": "Watch bounces and complaints for two hours; pause if >3%"
    },
    {
     "done": false,
     "id": "d20-4",
     "text": "Schedule remaining batches at 60/day through Nov 6"
    },
    {
     "done": false,
     "id": "d20-5",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Launch the campaign",
   "id": "d20"
  },
  {
   "date": "2026-11-01",
   "day": 21,
   "goal": "Publish “An outbound loop built on my own product”.",
   "tasks": [
    {
     "done": false,
     "id": "d21-1",
     "text": "Write-up: play, sourcing, one template over 92 drafts, deliverability"
    },
    {
     "done": false,
     "id": "d21-2",
     "text": "Trade-offs note: Clay vs scripting, Sequences vs cold tool, review queue"
    },
    {
     "done": false,
     "id": "d21-3",
     "text": "Start the Firestore and PostHog export scripts"
    },
    {
     "done": false,
     "id": "d21-4",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Write-up 3",
   "id": "d21"
  },
  {
   "date": "2026-11-02",
   "day": 22,
   "goal": "Firestore, PostHog and HubSpot land in BigQuery on a schedule.",
   "tasks": [
    {
     "done": false,
     "id": "d22-1",
     "text": "Create the BigQuery project and raw datasets"
    },
    {
     "done": false,
     "id": "d22-2",
     "text": "Firestore nightly export + load"
    },
    {
     "done": false,
     "id": "d22-3",
     "text": "PostHog BigQuery batch export"
    },
    {
     "done": false,
     "id": "d22-4",
     "text": "HubSpot Worker cron into raw_hubspot"
    },
    {
     "done": false,
     "id": "d22-5",
     "text": "Campaign check: replies, bounces, domain health"
    },
    {
     "done": false,
     "id": "d22-6",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Warehouse and loaders",
   "id": "d22"
  },
  {
   "date": "2026-11-03",
   "day": 23,
   "goal": "Answer the five questions in raw SQL before any modeling tool.",
   "tasks": [
    {
     "done": false,
     "id": "d23-1",
     "text": "Activation rate by plan and source"
    },
    {
     "done": false,
     "id": "d23-2",
     "text": "Median time verification → first run → first PDF"
    },
    {
     "done": false,
     "id": "d23-3",
     "text": "Module retention week 1 → 2 → 3"
    },
    {
     "done": false,
     "id": "d23-4",
     "text": "Enrichment lift: ICP ≥ 70 vs below"
    },
    {
     "done": false,
     "id": "d23-5",
     "text": "Campaign reply and interested rate by band and step"
    },
    {
     "done": false,
     "id": "d23-6",
     "text": "Keep every query in analytics/sql/ with a one-line interpretation"
    },
    {
     "done": false,
     "id": "d23-7",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "SQL day",
   "id": "d23"
  },
  {
   "date": "2026-11-04",
   "day": 24,
   "goal": "The raw tables become a small, documented model layer.",
   "tasks": [
    {
     "done": false,
     "id": "d24-1",
     "text": "dbt Core project: staging + dim/fct models"
    },
    {
     "done": false,
     "id": "d24-2",
     "text": "Tests: unique uid, not-null email, accepted values"
    },
    {
     "done": false,
     "id": "d24-3",
     "text": "Generate dbt docs; commit the lineage screenshot"
    },
    {
     "done": false,
     "id": "d24-4",
     "text": "Run on a GitHub Actions schedule after the loads"
    },
    {
     "done": false,
     "id": "d24-5",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "dbt models",
   "id": "d24"
  },
  {
   "date": "2026-11-05",
   "day": 25,
   "goal": "A single dashboard on the warehouse, and a verdict on the campaign.",
   "tasks": [
    {
     "done": false,
     "id": "d25-1",
     "text": "Looker Studio on the dbt models"
    },
    {
     "done": false,
     "id": "d25-2",
     "text": "Campaign readout: final numbers, cost per interested reply, expand/stop"
    },
    {
     "done": false,
     "id": "d25-3",
     "text": "Book interested replies into calls"
    },
    {
     "done": false,
     "id": "d25-4",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Metrics dashboard and campaign results",
   "id": "d25"
  },
  {
   "date": "2026-11-06",
   "day": 26,
   "goal": "Publish “A GTM data layer for a one-person product”.",
   "tasks": [
    {
     "done": false,
     "id": "d26-1",
     "text": "Write-up: why a warehouse, the model layer, three findings"
    },
    {
     "done": false,
     "id": "d26-2",
     "text": "One-page architecture diagram of the full stack"
    },
    {
     "done": false,
     "id": "d26-3",
     "text": "Trade-offs note: BigQuery vs Postgres, dbt vs SQL, Looker vs module"
    },
    {
     "done": false,
     "id": "d26-4",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Write-up 4 and the architecture page",
   "id": "d26"
  },
  {
   "date": "2026-11-07",
   "day": 27,
   "goal": "One Mktforge GTM Engineering case study on the portfolio.",
   "tasks": [
    {
     "done": false,
     "id": "d27-1",
     "text": "New portfolio page: problem, systems, diagram, numbers, trade-offs"
    },
    {
     "done": false,
     "id": "d27-2",
     "text": "5-minute narrated screen recording of the loop"
    },
    {
     "done": false,
     "id": "d27-3",
     "text": "“Marketing Engineering” card on the portfolio index"
    },
    {
     "done": false,
     "id": "d27-4",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "The flagship case study",
   "id": "d27"
  },
  {
   "date": "2026-11-08",
   "day": 28,
   "goal": "Your materials say GTM Engineer and the proof is one click away.",
   "tasks": [
    {
     "done": false,
     "id": "d28-1",
     "text": "Resume: GTM Engineering project block with numbers; skills line"
    },
    {
     "done": false,
     "id": "d28-2",
     "text": "LinkedIn: headline, about, Mktforge entry; case study pinned"
    },
    {
     "done": false,
     "id": "d28-3",
     "text": "Ask two former colleagues for a recommendation"
    },
    {
     "done": false,
     "id": "d28-4",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Resume and LinkedIn",
   "id": "d28"
  },
  {
   "date": "2026-11-09",
   "day": 29,
   "goal": "Five answers under two minutes each, with numbers.",
   "tasks": [
    {
     "done": false,
     "id": "d29-1",
     "text": "Pipeline program built from the ground up"
    },
    {
     "done": false,
     "id": "d29-2",
     "text": "A trade-off behind something built, bought or simplified"
    },
    {
     "done": false,
     "id": "d29-3",
     "text": "Quality and error handling in an AI workflow"
    },
    {
     "done": false,
     "id": "d29-4",
     "text": "What you would expand and what you would stop"
    },
    {
     "done": false,
     "id": "d29-5",
     "text": "What you need from AEs and BDRs before launch"
    },
    {
     "done": false,
     "id": "d29-6",
     "text": "Run each answer out loud; cut anything over two minutes"
    },
    {
     "done": false,
     "id": "d29-7",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Rehearse the story",
   "id": "d29"
  },
  {
   "date": "2026-11-10",
   "day": 30,
   "goal": "The Edra application is in; ten more roles targeted.",
   "tasks": [
    {
     "done": false,
     "id": "d30-1",
     "text": "Edra: tailored resume, four-sentence note, apply; message the hiring manager"
    },
    {
     "done": false,
     "id": "d30-2",
     "text": "Confirm the on-site question before applying"
    },
    {
     "done": false,
     "id": "d30-3",
     "text": "Ten more GTM/Growth Engineer roles with the same materials"
    },
    {
     "done": false,
     "id": "d30-4",
     "text": "Book two coffee chats with people holding the title"
    },
    {
     "done": false,
     "id": "d30-5",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Apply and pipeline the search",
   "id": "d30"
  }
 ],
 "tools": [
  {
   "group": "Build & deploy",
   "id": "git",
   "name": "Git & GitHub",
   "usedDay": 1
  },
  {
   "group": "Build & deploy",
   "id": "gh",
   "name": "GitHub CLI",
   "usedDay": 1
  },
  {
   "group": "Build & deploy",
   "id": "vscode",
   "name": "VS Code",
   "usedDay": 1
  },
  {
   "group": "Build & deploy",
   "id": "workers",
   "name": "Cloudflare Workers / wrangler",
   "usedDay": 1
  },
  {
   "group": "Build & deploy",
   "id": "cfqueue",
   "name": "Cloudflare Queues & KV",
   "usedDay": 3
  },
  {
   "group": "Build & deploy",
   "id": "actions",
   "name": "GitHub Actions (CI)",
   "usedDay": 3
  },
  {
   "group": "Build & deploy",
   "id": "mermaid",
   "name": "Mermaid diagrams",
   "usedDay": null
  },
  {
   "group": "Build & deploy",
   "id": "claude",
   "name": "Claude API",
   "usedDay": 1
  },
  {
   "group": "Product analytics",
   "id": "posthog",
   "name": "PostHog",
   "usedDay": 4
  },
  {
   "group": "CRM & automation",
   "id": "hs-props",
   "name": "HubSpot properties & workflows",
   "usedDay": 8
  },
  {
   "group": "CRM & automation",
   "id": "hs-api",
   "name": "HubSpot API & webhooks",
   "usedDay": 8
  },
  {
   "group": "CRM & automation",
   "id": "hs-seq",
   "name": "HubSpot Sequences",
   "usedDay": null
  },
  {
   "group": "CRM & automation",
   "id": "zapier",
   "name": "Zapier",
   "usedDay": 11
  },
  {
   "group": "CRM & automation",
   "id": "slack",
   "name": "Slack webhooks",
   "usedDay": null
  },
  {
   "group": "Outbound & deliverability",
   "id": "m365",
   "name": "Microsoft 365 mailboxes",
   "usedDay": 2
  },
  {
   "group": "Outbound & deliverability",
   "id": "dns",
   "name": "DNS: SPF / DKIM / DMARC (Porkbun)",
   "usedDay": 2
  },
  {
   "group": "Outbound & deliverability",
   "id": "mailreach",
   "name": "Mailreach warm-up",
   "usedDay": 2
  },
  {
   "group": "Outbound & deliverability",
   "id": "mxtoolbox",
   "name": "MXToolbox",
   "usedDay": null
  },
  {
   "group": "Outbound & deliverability",
   "id": "apollo",
   "name": "Apollo",
   "usedDay": 16
  },
  {
   "group": "Outbound & deliverability",
   "id": "clay",
   "name": "Clay",
   "usedDay": 15
  },
  {
   "group": "Data layer",
   "id": "bigquery",
   "name": "BigQuery",
   "usedDay": null
  },
  {
   "group": "Data layer",
   "id": "sql",
   "name": "SQL",
   "usedDay": null
  },
  {
   "group": "Data layer",
   "id": "dbt",
   "name": "dbt Core",
   "usedDay": null
  },
  {
   "group": "Data layer",
   "id": "looker",
   "name": "Looker Studio",
   "usedDay": null
  }
 ]
};
