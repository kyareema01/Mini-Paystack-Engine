# Mini-Paystack-project
A transaction processing simulation built with Vanilla Node js. This project demonstrates advanced JavaScript concepts applied to real world fintech challenges like fraud detection, data auditing, and automated reporting

Tech Stack
  Runtime: Node js (Vanilla HTTP Module)
  Language: JavaScript
  Architecture: Modular Pattern (Separation of Data, Logic, and Server)

Key Features
  1. Advanced Data Auditing
    Utilizes the reduce() accumulator pattern to process thousands of transactions in a single pass.
    Calculates: Total Success Volume, Transaction Status Frequency, and System Failure Rates.
    Optimization: O(n) time complexity ensures performance even as dataset size scales.
  
  2. The High Roller Filter
    An implementation of filter() method to isolate high value successful transfers (>= ₦20,000), simulating premium customer tracking.
  
  3. Fraud Sentry Logic (Time Series Analysis)
    A predictive security layer that flags accounts for "Spamming" or "Velocity Attacks."
  
  The Logic: Compares the timestamp of back to back transactions from the same user. If the interval is under 5 seconds, it flags the       behavior as suspicious.

How to Run
  Clone the repo:
  
  git clone https://mini-paystack.git
  cd mini-paystack
  Start the server:
  
  node server.js
  View the Dashboard:
  Open index.html in your browser to interact with the API endpoints.
  
API DOCUMENTATION
/api/audit	GET	Returns a full report including volume and failure rates.
/api/highrollers	GET	Returns all successful transfers above ₦20,000.

Note: This project does not use Express js. I built it using the native http module to demonstrate a foundational understanding of the Node js runtime and HTTP protocol.
