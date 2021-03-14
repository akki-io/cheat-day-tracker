# cheat-day-tracker.akki.ca

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/akki-io/cheat-day-tracker)

A simple web app to track my cheat days using the AWS Amplify Framework and Vue.js

![Screenshot](https://raw.githubusercontent.com/akki-io/cheat-day-tracker/master/public/screenshot.jpg "Screenshot")

AWS Amplify Framework is a powerful framework and is the fastest, easiest way to develop mobile and web apps that scale. This app is completely serverless.

In this project I was exploring the new [AWS Amplify Admin UI](https://docs.amplify.aws/console/adminui/intro).

![Admin UI](https://raw.githubusercontent.com/akki-io/cheat-day-tracker/master/public/admin-ui.jpg "Admin UI")

# Stack
- Frontend - VueJs
- Serverless API - AWS AppSync GraphQL API
- Serverless Database - AWS DynamoDB

# Prerequisites

Before we begin, make sure you have the following installed:
- [Node.js](https://nodejs.org/) v10.x or later
- [npm](https://www.npmjs.com/) v5.x or later
- [git](https://git-scm.com/) v2.14.1 or later
- [AWS Account](https://aws.amazon.com/)

# Setup
Follow the instruction here to set up AWS account and Amplify CLI.
https://docs.amplify.aws/start/getting-started/installation/q/integration/vue

# Installation
- Clone the repo: `git clone https://github.com/akki-io/cheat-day-tracker`
- `cd cheat-day-tracker`
- `yarn install`
- `yarn serve`
- `amplify init`
- `amplify publish`

# Deploy AS-IS
- Fork the repo
- On the forked repo click the "Deploy to Amplify Console" button.
