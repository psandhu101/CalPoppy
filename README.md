# Swanton Chat Bot

A chatbot web app for the [Swanton Virtual Assistant](https://github.com/swantonpoppycp/CalPoppy). Its purpose is to answer historical and cultural questions about Swanton Pacific Ranch.

[See it live](https://swantonpoppycp.github.io/CalPoppy/)

Features include:

- A simplistic chat interface where users send messages to the Swanton Virtual Assistant
- FAQs that direct visitors toward interesting historical stories about the ranch.

## Getting Started

1. Clone this repo: `https://github.com/swantonpoppycp/CalPoppy.git`
2. Navigate to folder: `cd CalPoppy`
3. Install dependencies: `npm install`
4. Start the backend server (see section below)
5. Start the development server (in a new terminal in the main directory): `npm start`
6. Open the app in your browser: `http://localhost:3000`
7. Update the hosting server 'npm run deploy'

## Running the backend

(Note that `python` may have to be replaced with `python3`)

1. Navigate to folder: `cd flask-server`
2. Update submodule if KGQA is empty: `git submodule update --init --recursive`

If the submodule won't update, try removing it and then adding it again:
`git rm -r --cached KGQA`
`git submodule add https://github.com/mathurma/KGQA KGQA`

### On Mac/Linux:

3. Create a virtual environment: `python -m venv venv`
4. Activate the virtual environment: `source venv/bin/activate`
5. Install the requirements.txt file: `pip install -r requirements.txt` or `python -m pip install -r requirements.txt`
6. Run the server: `flask run`

### On Windows:

3. Create a virtual environment: `python -m venv venv`
4. Activate the virtualenv: `venv\Scripts\activate`
5. Install the requirements.txt file: `pip install -r requirements.txt`
6. Manually install flask and encorewebsm
    * pip install flask
    * pip install -U setuptools wheel
    * pip install -U spacy
    * python -m spacy download en_core_web_sm
7. Run the server: `flask run`