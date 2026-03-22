# Varun Sharma — Candidate Knowledge Base

Use this document as the ground truth when generating cover letters, tailoring resume bullet points, or making AI edits on behalf of Varun Sharma. Prefer the detailed context here over anything inferred solely from the LaTeX source.

---

## Personal & Contact

| Field       | Value           |
| ----------- | --------------- |
| Name        | Varun Sharma    |
| Location    | Milpitas, CA    |
| Phone       | (408) 505-2376  |
| Email       | vas001@ucsd.edu |
| Citizenship | U.S. Citizen    |

---

## Education

**University of California, San Diego** — La Jolla, CA

- Degree: B.S. Mathematics and Computer Science
- Minor: Cognitive Science
- Expected Graduation: December 2026 (Senior standing as a third-year student)
- GPA: 3.9 / 4.0
- Honors: Provost Honors 2023–2026
- Relevant Coursework: Data Structures & OOD, Computer Organization, Design & Analysis of Algorithms, Database System Principles, Web Mining & AI Recommender Systems, Machine Learning, Software Tools and Techniques

---

## Work Experience

### Visa — Austin, TX

**Incoming Software Engineer Intern** | Jun 2026 – Aug 2026

- Developing agentic AI workflows and an LLM + RAG chatbot for querying the CDISI knowledge base.

---

### DeepLearning.AI — Mountain View, CA

**Software Engineer Intern** | Sep 2025 – Present

- **Site**: https://ai-dev.deeplearning.ai/
- Maintains and updates the AI Developer Conference website; publishes new content and coordinates frequent event changes (speakers, sponsors, schedule, ticket pricing, past events).
- Refactored site from a strictly Vercel v0 setup to Next.js + React; used Supabase edge functions and Google Sheets API; hosted on Vercel.
- **Performance work**: Diagnosed slow load times (especially mobile) using Chrome DevTools — identified ~19 MB of page assets. Compressed and resized images, removed/simplified unnecessary heavy animations. Reduced total transfer size to ~3 MB with noticeably improved load times.
- Built a backend for sponsor intake processing.
- Previous engineer used strictly Vercel v0; Varun modernized the stack and resolved latency issues independently.

---

### AI Fund — Mountain View, CA

**AI & Technical Program Management Intern** | Jul 2025 – Present
AI Fund is a venture studio that builds startups from the ground up.

#### UltraLink (RAG Candidate Search System)

**Data Collection**

- Collected a CSV of AI Fund team members' LinkedIn connections and built a LinkedIn profile collection pipeline using Apify, processing connections in batches of 100 with incremental saves to prevent data loss.
- Ran data quality and filtering utilities to remove incomplete profiles and measure field completeness across key fields; saved cleaned dataset as JSON.
- Problem: Apify sometimes returned profiles with missing sections (e.g., experience), so added completeness checks and re-queued those profiles for retry. Some profile URLs returned empty results (deleted profiles) — handled gracefully.

**AI Transformation / Profile Enhancement**

- Used an LLM pipeline (OpenAI structured outputs) to normalize and enrich raw LinkedIn profiles into a consistent schema.
- Added implied fields: seniority classification (intern / junior / senior / C-level), structured summaries, implied skills (inferred from company descriptions + job titles), industry classification (e.g., healthcare).
- Persisted enriched profiles into Supabase Postgres (nested experience/education stored as JSON) for fast querying.
- Problem: LLM outputs were inconsistent → enforced strict JSON schema with structured outputs + validation. Sparse profiles risked hallucinations → used company description + job titles to infer reasonable skills instead of guessing.

**Search & Ranking (Product)**

- Built a natural-language candidate search experience returning a ranked shortlist of profiles from a corpus of ~200,000 candidates in the applicant tracking system.
- Converted user queries into SQL database queries and structured filters (role, skills, seniority, location, etc.).
- Two-stage matching workflow: LLM labels candidates as strong / partial / no match, then generates short fit rationales for strong matches.
- Added LLM-based reranking step to order results by relevance.
- Implemented recruiting workflows: bookmarks, notes, shareable search links for team review and collaboration.
- Problems solved:
  - Full raw profile JSON passed to Gemini → missed candidates → switched to two-stage: generate compact summaries first, then rank on summaries.
  - Slow searches at scale → added fast retrieval-only mode (skip reranking) and only run LLM ranking on demand.
  - High LLM costs → used GPT-4o-mini (nano) for summaries with low reasoning mode; reserved heavier models for ranking.
  - SQL prompt tuning → expanded abbreviations (e.g., "ai" → "artificial intelligence"), tried both forms; if too few results, reprompted to broaden query.

#### Buildathon Website

- **Site**: https://www.buildathon.ai/
- AI Fund hosted its first-ever Buildathon competition (partnered with DeepLearning.AI) to rapidly build five projects.
- Designed and built the full Buildathon website using JavaScript, React, and Tailwind CSS.
- Backend: Supabase edge functions + Supabase database for storing applicant info.
- Proactively created an internal HR dashboard for the recruiting team to review and manage applicants.
- Challenge: No design spec existed — all layout and UX decisions were Varun's own initiative.

---

### Planck AI — Remote

**Data Validation Intern** | Mar 2025 – Jul 2025
Planck AI builds software that connects a business's data and tools so people can query them in plain English.

- Built PDF processing pipelines using PDFPlumber, LayoutParser, and OCR (PaddleOCR) to extract structured data from diverse multi-layout PDFs for LLM workflows.
- PaddleOCR (open-source OCR toolkit) was used to identify text types (titles, tables, columns, rows) and extract structured data from tables.
- Generated annotated visualizations to debug parsing errors and verify extraction quality before data flowed into LLM tasks.
- Problem: Scanned documents were hard to parse. Native PDFs worked well with PDFPlumber (good at preserving text order/columns). Tables were particularly difficult — inconsistent dividers — found an open-source model specialized in table detection.
- Tech: PDFPlumber, LayoutParser, PaddleOCR, Python.

---

### Integem — Cupertino, CA

**Artificial Intelligence & AR Project Intern** | Jun 2024 – Sep 2024
Integem is an education company teaching kids programming and robotics.

- Retrained and deployed a lightweight TensorFlow image classifier (MobileNetV2-style transfer learning) to recognize a standard cube from a live camera feed for a robot pickup workflow.
- Problem: Changing lighting, motion blur, and background clutter caused missed detections and false positives on the robot's live feed.
- Solution: Added a new binary classification head on top of frozen MobileNetV2 backbone. Improved accuracy by ~10% through robust data augmentation:
  - Simulated low light via brightness reduction + noise.
  - Simulated lighting changes and shadows via contrast + gamma adjustments.
  - Random crop and resize for multi-scale recognition.
  - OpenCV transforms for motion blur and sensor grain.
  - Used early stopping and learning rate scheduling to reduce overfitting.
  - Added confidence threshold so the robot only acted on consistently confident predictions.
- Trained models on NVIDIA Jetson Nano; built AR game components in Python on Raspberry Pi robots.
- Tech: TensorFlow, MobileNetV2, OpenCV, Python, NVIDIA Jetson Nano, Raspberry Pi.

---

### ULAB Systems — San Mateo, CA

**R&D Summer Intern** | Jun 2021 – Aug 2022
ULAB Systems is a dental aligner company (similar to Invisalign).

- Developed Python scripts to analyze material stress-force properties while collaborating with engineers and scientists.
- Created a script to summarize sensor data sampled every second over 7 days, downsampling to ~3,000 points. Previously the team did this manually in Excel, which was slow with large files.

---

## Projects

### Healthcare Patient Scheduling Chatbot | May 2025

**Tech**: React, Supabase, OpenAI API, Google Calendar API

- Built a React + Supabase chatbot powered by the OpenAI API to match patients with therapists based on their specific needs and specialty.
- Used OpenAI function calling to drive the chatbot's decision logic.
- Integrated Google Calendar API for automated appointment scheduling.
- Developed an admin dashboard for real-time session management of patient inquiries and appointments.

---

### MediMinder (AI Medication Management)

**Stack**: Full-stack, AI-powered

- Built a full-stack AI-powered medication management application geared toward elderly users.
- Features: medication tracking, reminders, and management tools designed for older adults with complex medication schedules.

---

### Automatic Playlist Continuation | Dec 2024

**Tech**: Python, Gensim Word2Vec, NLTK, NumPy, Pandas, FAISS, TensorFlow/PyTorch

**Context**: Spotify Million Playlist Dataset Challenge — recommend 500 songs to continue a playlist.

**Model 2 — Word2Vec Title-Based Recommender**

- Goal: Use playlist title text to infer what songs should continue the playlist.
- Preprocessing: Lowercased titles, removed punctuation/noise with regex, removed stopwords with NLTK, tokenized into word lists.
- Trained Gensim Word2Vec on playlist titles so related words end up close in vector space (e.g., "chill", "relax", "study").
- Represented each playlist as the average of its title word vectors.
- Found most similar playlists by cosine similarity, then pulled songs from those playlists.
- Ranked candidate tracks by frequency using Counter/defaultdict.
- Output: Ranked list of 500 track IDs per playlist.
- Libraries: gensim, nltk, re, numpy, pandas, collections, json, os.

**Model 3 — Autoencoder Embeddings + CNN Next-Song Prediction + FAISS Retrieval**

- Goal: Learn song representations from listening/co-occurrence structure and predict what comes next.
- Autoencoder: Trained on song interaction/co-occurrence matrix restricted to frequent songs; bottleneck layer produces low-dimensional song embeddings.
- CNN Sequence Model: Each playlist → sequence of song embeddings, padded/truncated to a fixed window; CNN predicts the next-song embedding vector.
- Loss: Cosine-style similarity between predicted and true next-song embedding.
- Retrieval: Used FAISS for fast nearest-neighbor search over all song embeddings to return top-500 tracks.
- Libraries: numpy, pandas, collections, faiss.

---

## Technical Skills

### Languages

Python, SQL, JavaScript, TypeScript

### AI / ML

LLMs, Agentic AI, Retrieval-Augmented Generation (RAG), Prompt Engineering & Optimization, Reinforcement Learning, NLP, Computer Vision, Machine Learning, Deep Learning, TensorFlow, PyTorch, OpenAI API (function calling, structured outputs), Gemini, LangChain, Word2Vec, FAISS

### Web / Full-Stack

React, Next.js, Tailwind CSS, Supabase (Postgres + Edge Functions), Google Sheets API, Google Calendar API, Vercel, Apify

---

## Additional Context for Cover Letters

- Varun is a third-year student at UCSD with **senior standing** (on track to graduate December 2026).
- He is currently working **20 hours/week** simultaneously for AI Fund and DeepLearning.AI while in school.
- Strong at **end-to-end ownership**: takes a project from data collection → modeling → product UI → deployment.
- Comfortable working in **ambiguous environments** where requirements aren't fully defined (e.g., Buildathon site had no design spec).
- Has shipped **real production systems** used by actual recruiting teams and event attendees — not just academic projects.
- Consistently **identifies and solves performance/quality problems** proactively (latency on DeepLearning.AI site, data quality in UltraLink, LLM cost optimization).
- Deep interest in applying AI to practical, human-facing problems: recruiting, healthcare, education, media.
