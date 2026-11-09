// Generated from the live tracker. Do not edit by hand.
window.PLAN = {
 "updated": "Nov 9, 2:45 PM",
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
     "text": "Write-back: enrichment to the HubSpot Company, ICP score to the Contact; Zap \"HubSpot domain → Clay\" for near-real-time rows (poll is daily)"
    },
    {
     "done": true,
     "id": "d15-4",
     "text": "Cut: My Company pre-fill from enrichment (first item on the plan's cut list)"
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
   "date": "2026-10-28",
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
     "moved": "2026-10-29",
     "text": "Thu: run the Mktforge chain on Mktforge itself (persona → positioning vs M1-Project → messaging → Target Messaging)"
    },
    {
     "done": true,
     "id": "d17-2",
     "moved": "2026-10-29",
     "text": "Rewrite the output into a founder-to-founder email; subject line; tokens first name + company only"
    },
    {
     "done": true,
     "id": "d17-3",
     "moved": "2026-10-29",
     "text": "Name the win before launch: one founder through the full loop, ~5% replies as the input"
    },
    {
     "done": true,
     "id": "d17-4",
     "moved": "2026-10-29",
     "text": "Save docs/emails/founders-trial-2026-10.md and the Day 17 trade-offs line in Mktforge-Website"
    },
    {
     "done": true,
     "id": "d17-5",
     "moved": "2026-10-29",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Personalization through Mktforge",
   "id": "d17"
  },
  {
   "date": "2026-10-30",
   "day": 18,
   "goal": "A sending setup that will not burn mktforge.io: HubSpot Sequences on a Sales Hub Pro trial, both getmktforge.com mailboxes clean, launch Mon Nov 2.",
   "tasks": [
    {
     "done": true,
     "id": "d18-1",
     "text": "Warm-up check: 4/4 inbox (both mailboxes × Gmail + Outlook), Heatwave not listed, 0/68 blacklists, DMARC valid (p=none)"
    },
    {
     "done": true,
     "id": "d18-2",
     "text": "Sender: Sales Hub Professional 14-day trial (Starter has no Sequences; Graph script rejected to keep the HubSpot record); both mailboxes connected as personal inboxes"
    },
    {
     "done": true,
     "id": "d18-3",
     "text": "Sequence founders-trial-2026-10: one step, tokens first name (fallback 'there') + company; unenroll on reply/meeting; unsubscribe link on; 7 AM–4 PM weekdays"
    },
    {
     "done": true,
     "id": "d18-4",
     "text": "Ramp set by the clean check: Mon 10 / Tue 20 / Wed 30 / Thu 32, split across mailboxes, each day gated on <2% bounces; do-not-contact segment; 89 sendable of 92 (two ICP 0s skipped)"
    },
    {
     "done": true,
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
     "done": true,
     "id": "d19-1",
     "text": "Reply classifier in hubspot-sync off a developer-app webhook (contact.propertyChange on hs_sales_email_last_replied; the inbox webhook only covers the team inbox); rules first, Claude Haiku for the rest; writes mktforge_reply_class"
    },
    {
     "done": true,
     "id": "d19-2",
     "text": "Interested → deal + Note (reply, enrichment, what was sent) + Slack post; HubSpot already unenrols on reply"
    },
    {
     "done": true,
     "id": "d19-3",
     "text": "Wrong person → Slack post with Approve and send / Skip; Approve replies from tyler@ via Microsoft Graph and logs the send on the contact"
    },
    {
     "done": true,
     "id": "d19-4",
     "text": "Unsubscribe → communication-preferences unsubscribe-all; do-not-contact segment picks it up"
    },
    {
     "done": true,
     "id": "d19-5",
     "text": "Done-when: 25 fake replies (5 per class) through the live Worker, 24/25 on first pass (the miss was the harness reading back too early); Approve-to-send proven with a logged email on the contact"
    },
    {
     "done": true,
     "id": "d19-6",
     "text": "Update the dashboard (plan.js → push)"
    }
   ],
   "title": "Reply handling and handoff",
   "id": "d19"
  },
  {
   "date": "2026-11-02",
   "day": 20,
   "goal": "Launch Monday: first batch scheduled ahead for 7:07 AM PT, the ramp enrolled the evening before each day, all 89 out by Thursday.",
   "tasks": [
    {
     "done": true,
     "id": "d20-0",
     "moved": "2026-11-01",
     "text": "Sun: postal address line on the template (docs/emails; paste into the Sequence email before Tuesday's batch) and the refine pass on the three lifecycle emails"
    },
    {
     "done": true,
     "id": "d20-1",
     "moved": "2026-10-31",
     "text": "Sat: bump added as step 2 (threaded reply, 3 business days); three non-sendable contacts removed from the segment (89); 11 from the 78-score band enrolled from tyler@ for Mon 7:07 AM PT, tokens checked"
    },
    {
     "done": true,
     "id": "d20-6",
     "moved": "2026-11-01",
     "text": "Sun: scripts/hubspot/strip-company-suffix.mjs run (dry run, then apply): 20 contacts stripped of the \"(YC W24)\"-style suffix, 72 already clean"
    },
    {
     "done": true,
     "id": "d20-2",
     "text": "Mon after the CEO call: check bounces, complaints and placement on the first 11; pause if anything is off"
    },
    {
     "done": true,
     "id": "d20-3",
     "moved": "2026-11-05",
     "text": "Tue 20 / Wed 27 / Thu 31: enroll each batch the evening before, gated on the previous day's bounces under 2% and zero complaints. All 89 out by Thu Nov 5 7:17 AM PT; 1 hard bounce total, 0 complaints, 1 unsubscribe (link click, suppressed)"
    },
    {
     "done": true,
     "id": "d20-7",
     "moved": "2026-11-03",
     "text": "Weekly Heatwave recheck: getmktforge.com not listed (Nov 3, 18:30 UTC)"
    },
    {
     "done": true,
     "id": "d20-4",
     "moved": "2026-11-05",
     "text": "Dashboard for the play: Looker Studio \"Mktforge GTM\" on dbt_marts (campaign page: scorecards, results by ICP band, step split, sends by day)"
    },
    {
     "done": true,
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
   "goal": "Publish “If You Won't Use the Tool You Built, Why Should I?”",
   "tasks": [
    {
     "done": true,
     "id": "d21-1",
     "moved": "2026-10-31",
     "text": "Sat: Write-up 3 published on LinkedIn and Medium: the pipeline (Apollo/Clay/ICP gates), one template over 92 drafts with the draft-vs-sent comparison, the loop back to HubSpot, and the bet (89 sends, ~5% replies, one founder through)"
    },
    {
     "done": true,
     "id": "d21-2",
     "text": "Trade-offs note: Oct 31 launch decisions, the Day 19 classifier (developer-app webhook after all, rules before model, approve-to-send), Clay vs scripting, lifecycle emails unwired on purpose"
    },
    {
     "done": true,
     "id": "d21-3",
     "text": "Firestore, PostHog and HubSpot exporters (analytics/export in mktforge-workers, NDJSON for bq load); run tonight so Day 22 starts at the load"
    },
    {
     "done": true,
     "id": "d21-4",
     "moved": "2026-10-31",
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
     "done": true,
     "id": "d22-1",
     "text": "Create the BigQuery project and raw datasets"
    },
    {
     "done": true,
     "id": "d22-2",
     "moved": "2026-11-04",
     "text": "Firestore nightly export + load (scheduled with dbt on GitHub Actions; hand-run until then)"
    },
    {
     "done": true,
     "id": "d22-3",
     "text": "PostHog BigQuery batch export"
    },
    {
     "done": true,
     "id": "d22-4",
     "moved": "2026-11-04",
     "text": "HubSpot export + load into raw_hubspot (scheduled with dbt on GitHub Actions, not a Worker cron)"
    },
    {
     "done": true,
     "id": "d22-5",
     "text": "Campaign check: replies, bounces, domain health"
    },
    {
     "done": true,
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
     "done": true,
     "id": "d23-1",
     "text": "Q1 reconcile: do Firestore, PostHog and HubSpot agree per user (runs 3/3 yes; pdfs_saved counts saves by design; modules_run drifted on 2 contacts: seed ticked the Worker name as a module)"
    },
    {
     "done": true,
     "id": "d23-2",
     "text": "Q2 first session: order of signup → company → key → first run, hours to first run (company-first holds, n=3; three accounts never ran a module)"
    },
    {
     "done": true,
     "id": "d23-3",
     "text": "Q3 run duration and failures by module (find-my-customer p50 115 s, 5 abandoned; streaming Workers record time-to-first-byte, reportRun bug)"
    },
    {
     "done": true,
     "id": "d23-4",
     "text": "Q4 ladder adherence (67%, but it is me testing, not a barometer)"
    },
    {
     "done": true,
     "id": "d23-5",
     "text": "Q5 email → in-app action within 7 days (join works, empty until the first lifecycle send); plus events vs events_batch cross-check (match outside the 30-day window)"
    },
    {
     "done": true,
     "id": "d23-6",
     "text": "Keep every query in analytics/sql/ with a one-line interpretation (Workers PR #26, run-all.ps1)"
    },
    {
     "done": true,
     "id": "d23-8",
     "moved": "2026-11-05",
     "text": "The plan's original five built as queries 06–10 on the marts with \"empty until\" lines (four return internal rows only); fct_retention_weekly mart added for the retention question (Workers PR #30)"
    },
    {
     "done": true,
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
     "done": true,
     "id": "d24-6",
     "text": "Thursday's 31 (92+) enrolled from tyler@ for Thu 7:07 AM PT; whole segment (89) now scheduled. Wednesday's line clean: 1 bounce total, 0 unsubscribes"
    },
    {
     "done": true,
     "id": "d24-7",
     "text": "Seed fix: seed-from-posthog resolves each run's (module, worker) pair once, like the live path; CONTACT_PROPS now reads modules_run back; --recompute-modules repaired the two contacts (Workers PR #27)"
    },
    {
     "done": true,
     "id": "d24-8",
     "text": "reportRun fires when the body closes, not the headers: streaming Workers record real durations; a client disconnect mid-stream lands as error / client_aborted and is not counted (PR #27, all ten Workers redeployed)"
    },
    {
     "done": true,
     "id": "d24-1",
     "text": "dbt Core project: 12 staging views + dim_users, dim_companies, fct_module_runs, fct_funnel_daily, fct_outreach, fct_outreach_emails (Workers PR #28)"
    },
    {
     "done": true,
     "id": "d24-2",
     "text": "Tests: unique / not-null keys, plan, module, outcome, ICP band (38 tests, dbt build 56/56)"
    },
    {
     "done": true,
     "id": "d24-3",
     "text": "dbt docs generated; lineage graph committed at analytics/dbt/docs/lineage.png"
    },
    {
     "done": true,
     "id": "d24-4",
     "text": "warehouse.yml on GitHub Actions: daily 10:00 UTC exports → bq load → dbt build; first run green in 3m58s. Queries 01–05 now read from the models (326 → 198 lines)"
    },
    {
     "done": true,
     "id": "d24-9",
     "text": "Trade-offs: Day 23 (seed ticks, streaming duration, Looker over HubSpot) and Day 24 (dbt over plain SQL, one service account for Actions) in Mktforge-Website"
    },
    {
     "done": true,
     "id": "d24-10",
     "text": "Day 19 debt closed: Exchange application access policy scopes the Graph app to tyler@ (Test-ApplicationAccessPolicy Denied for tyler.wishnoff@, Granted for tyler@)"
    },
    {
     "done": true,
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
     "done": true,
     "id": "d25-1",
     "text": "Looker Studio on the dbt models: two pages, campaign + funnel (activation funnel, activation by signup week, retention by weeks since signup); warehouse workflow re-run by hand because the 10:00 UTC schedule did not fire on its first morning"
    },
    {
     "done": true,
     "id": "d25-2",
     "text": "Campaign readout written (docs/readouts/founders-trial-2026-10.md): 89 sent, 25 opens (28%), 0 replies, 1 bounce, 1 unsubscribe; $105 cash, ~24 h; expand the system, stop funded founders, test job seekers. Interim until the Nov 6 bump"
    },
    {
     "done": true,
     "id": "d25-3",
     "text": "Book interested replies into calls: none to book (0 replies through Nov 5)"
    },
    {
     "done": true,
     "id": "d25-5",
     "moved": "2026-11-06",
     "text": "Readout stamped final Nov 6 after the first bump (11 sent, 4 opens, 0 replies; step 1 at 31 opens, 34.8%); warehouse schedule fired seven hours late, moved to 10:17 UTC"
    },
    {
     "done": true,
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
   "goal": "Publish “A GTM Data Layer for a Team of One” (retitled from “one-person product”).",
   "tasks": [
    {
     "done": true,
     "id": "d26-1",
     "text": "Write-up 4 published on LinkedIn and Medium: why a warehouse at this size, dbt as the layer that defines and tests the numbers, three findings from the SQL (seed bug, run duration at first byte, ICP bands open 48/21/18/50% with 0 replies); lineage graph regenerated, Looker 200% retention row fixed first"
    },
    {
     "done": true,
     "id": "d26-2",
     "text": "Architecture diagram of the full stack (docs/covers/mktforge-gtm-stack.png): left-to-right spine, sourcing and Zapier above, warehouse below, three write-backs in peach; live on LinkedIn as the “Mktforge GTM Engineering Stack” project; portfolio page with Day 27"
    },
    {
     "done": true,
     "id": "d26-3",
     "text": "Trade-offs: BigQuery vs Postgres, cron moved to 10:17 UTC after a seven-hour delay (Workers PR #31), Looker summed a pre-divided rate (dbt vs SQL and Looker vs module were already logged Nov 4–5)"
    },
    {
     "done": true,
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
     "done": true,
     "id": "d27-1",
     "text": "Case study page live at twishnoff.github.io/Portfolio/GTM-Engineering: “A Complete GTM Engine, Built Solo in 30 Days”; problem (capabilities, not revenue), five systems with proof lines, stack diagram + ICP formula + dbt lineage, campaign table and verdict, 14 trade-offs in four themes (cost, portability, low overhead, scoring), eight links (Portfolio commit 508fc1f)"
    },
    {
     "done": true,
     "id": "d27-3",
     "text": "Homepage: fourth hero tile “5 GTM systems” beside the Mktforge tile (stack diagram thumbnail, navy GTM Engineering stamp), GTM Engineering in the nav dropdown on all five pages, sitemap entry; the plan’s 5-minute video cut per the cut list"
    },
    {
     "done": true,
     "id": "d27-5",
     "text": "Mktforge README lead-path flowchart redrawn from the stack diagram, reply triage as its own box, HubSpot-workflows and nudge nodes removed; edited and rendered in mermaid.ai myself (Mktforge PR #12)"
    },
    {
     "done": true,
     "id": "d27-6",
     "text": "Warehouse cron fired at 16:28 UTC, six hours after 10:17, so the Day 26 rule kicked in: Zap “Warehouse dispatch 10:15 UTC” (Schedule → Webhooks POST to the dispatches endpoint, fine-grained token on mktforge-workers, Actions read/write, expires Feb 5 2027) fires workflow_dispatch; test run #11 started in seconds; cron kept as fallback; two trade-offs lines and the flowchart SVG in docs/covers (Website PR #28)"
    },
    {
     "done": true,
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
     "done": true,
     "id": "d28-6",
     "text": "Bump sends missing from fct_outreach_emails (dashboard shows first_touch only; Nov 6 bump sent 11, opened 4): check the HubSpot export and the kind logic before Monday's bumps"
    },
    {
     "done": true,
     "id": "d28-1",
     "text": "Resume: GTM Engineering project block with numbers; skills line updated with the stack"
    },
    {
     "done": true,
     "id": "d28-2",
     "text": "LinkedIn: headline, about, Mktforge entry; case study pinned as featured"
    },
    {
     "done": true,
     "id": "d28-5",
     "text": "Before the trials end (Clay ~Nov 9, Apollo Nov 10): export the Prospects 1–3 and Signups tables and the Apollo account list to CSV, screenshot the Clay column chain and Apollo filters, copy the three Clay function definitions into the repo; decide pay-or-lapse on Clay"
    },
    {
     "done": true,
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
     "done": true,
     "id": "d29-1",
     "text": "Pipeline program built from the ground up"
    },
    {
     "done": true,
     "id": "d29-2",
     "text": "A trade-off behind something built, bought or simplified"
    },
    {
     "done": true,
     "id": "d29-3",
     "text": "Quality and error handling in an AI workflow"
    },
    {
     "done": true,
     "id": "d29-4",
     "text": "What you would expand and what you would stop"
    },
    {
     "done": true,
     "id": "d29-5",
     "text": "What you need from AEs and BDRs before launch"
    },
    {
     "done": false,
     "id": "d29-6",
     "moved": "2026-11-10",
     "text": "Run each answer out loud with the cards in hand; cut anything over two minutes"
    },
    {
     "done": true,
     "id": "d29-8",
     "text": "Slack-on-result step for the warehouse run (carried since Day 25)"
    },
    {
     "done": true,
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
   "goal": "Ten applications out with the current materials, as a readiness test.",
   "tasks": [
    {
     "done": false,
     "id": "d30-3",
     "text": "Ten GTM/Growth Engineer roles at seed to Series B B2B SaaS and AI companies, applied with the same materials"
    },
    {
     "done": false,
     "id": "d30-4",
     "text": "Write the readiness test down: the assumption (no interest), what counts as interest, when to check"
    },
    {
     "done": false,
     "id": "d30-6",
     "text": "Before Sales Hub Pro ends Nov 13 (do Nov 12 for final numbers): screenshot the Sequence Performance and Step performance tabs and export the enrollments list; sends and replies survive in the warehouse (fct_outreach), HubSpot's open counts and per-step view do not"
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
   "usedDay": 27
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
   "usedDay": 18
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
   "usedDay": 21
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
   "usedDay": 18
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
   "usedDay": 22
  },
  {
   "group": "Data layer",
   "id": "sql",
   "name": "SQL",
   "usedDay": 23
  },
  {
   "group": "Data layer",
   "id": "dbt",
   "name": "dbt Core",
   "usedDay": 24
  },
  {
   "group": "Data layer",
   "id": "looker",
   "name": "Looker Studio",
   "usedDay": 25
  }
 ]
};
