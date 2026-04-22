# Mini-Paystack Backend Engine

A transaction processing simulation built with Vanilla Node js. This project demonstrates advanced JavaScript concepts applied to real world fintech challenges like fraud detection, data auditing, and automated reporting

---

## Tech Stack

* **Runtime:** Node.js (Core HTTP Module)
* **Language:** JavaScript (ES6+)
* **Architecture:** Modular Design Pattern (Data, Logic, and Server)

---

## Key Features

### 1. Data Auditing
The engine utilizes the `.reduce()` accumulator pattern to process high volumes of transaction data in a single pass.
* **Calculates:** Total Success Volume, Transaction Status Frequency, and System Failure Rates.
* **Optimization:** $O(n)$ time complexity ensures linear scaling and high performance even as the dataset grows.

### 2. The "High Roller" Filter
A robust implementation of `.filter()` used to isolate premium transaction data. This simulates high value customer tracking by segmenting successful transfers $\ge$ ₦20,000.

### 3. "Fraud Sentry" Logic (Time Series Analysis)
A predictive security layer designed to mitigate "Velocity Attacks" or automated spamming.
* **The Logic:** Performs a delta comparison between the timestamps of consecutive transactions from the same user.
* **Threshold:** If the interval between transactions is **less than 5 seconds**, the system automatically flags the behavior as suspicious.

---

## 📂 Project Structure

```text
mini-paystack/
├── data/           # Mock transaction datasets
├── logic/          # Audit, Filter, and Fraud detection algorithms
├── routes/         # API Route handlers
├── server.js       # Entry point (Vanilla HTTP Server)
└── index.html      # Frontend Dashboard for API interaction
```
## Installation

### 1. Clone the repo and start server

```bash
git clone https://github.com/kyareema01/mini-paystack.git
cd mini-paystack
node server.js
```

## API Documentation

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/audit` | `GET` | Returns a full report of transaction volume. |
| `/api/highrollers` | `GET` | Returns transfers $\ge$ ₦20,000. |