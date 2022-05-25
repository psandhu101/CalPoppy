# Swanton Chat Bot

A chatbot web app for the [Swanton Virtual Assistant](https://github.com/calpoly-csai/swanton). Its purpose is to answer historical and cultural questions about Swanton Pacific Ranch.

[See it live](https://swantonpoppy.org)

Features include:

- A simplistic chat interface where users send messages to the Swanton Virtual Assistant
- FAQs that direct visitors toward interesting historical stories about the ranch.

## Getting Started

1. Clone this repo: `https://github.com/EdikusRex/CalPoppy.git`
2. Navigate to folder: `cd CalPoppy`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the app in your browser: `http://localhost:3000`



How To Update Front end to match master instructions: 
Note: Ensure to only pull the src folder, changes were made to flask-server, package.json, and other files to make the project compatible to deploy to Google Cloud App Engine.
Steps:
1. Check out the gcloud config brach 
2. Pull the src folder from master into gcloud-config
3. Add, Commit, and push the changes to gcloud-config to trigger the Github Actions workflow to update the website on Google Cloud App Engine
Commands for steps:
git checkout gcloud-config
git checkout master -- src
git add src
*You can run git status here to check that only files in src are the Changes to be committed *
git commit -m "Pulled Master frontend"
git push
