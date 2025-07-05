# IAM Visualizer – Static Website Hosting on AWS

This project is a static website hosted on Amazon S3 with continuous deployment configured through GitHub Actions and global delivery via CloudFront.

---

## 🌟 Project Overview

A simple frontend-only site designed to showcase IAM visualizations. It’s built with static HTML, CSS, and JavaScript — no backend or database required.

---

## 🚀 Deployment Guide

### 1. S3 Setup
- Created a public S3 bucket named `iam-visualizer-project`.
- Enabled static website hosting.
- Uploaded files manually first for testing.

### 2. CloudFront Setup
- Created a CloudFront distribution pointing to the S3 bucket.
- Enabled index/root object handling.
- Used the CloudFront URL for public access.

### 3. GitHub Actions CI/CD
- Initialized a GitHub repo and pushed the website code.
- Created a workflow file (`.github/workflows/deploy.yml`) to deploy on push to `master`.
- Stored `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` in GitHub secrets.
- Used the `jakejarvis/s3-sync-action` GitHub Action to sync files to S3.

---

## ⚙️ AWS Services Used

- **Amazon S3** – Static site hosting
- **Amazon CloudFront** – Content Delivery Network
- **GitHub Actions** – Continuous deployment pipeline
- **IAM** – Permissions for GitHub deployment user

---

## 🔗 Live URL

Access the deployed website through CloudFront:  
[https://YOUR-DISTRIBUTION-ID.cloudfront.net](https://YOUR-DISTRIBUTION-ID.cloudfront.net)

---

## 📁 Repository

GitHub Repository: [https://github.com/MohSaeed229/iam-visualizer](https://github.com/MohSaeed229/iam-visualizer)
