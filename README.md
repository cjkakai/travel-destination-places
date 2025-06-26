# Travel Destination Explorer

## Author
CJ Kakai

## Description
Travel Destination Explorer is a beginner-friendly web app that allows users to view, add, and filter travel destinations by continent. It's built using HTML, CSS, and JavaScript, and uses a local `json-server` for storing and managing destination data.

## Features
- View a list of travel destinations
- Filter destinations by continent using a dropdown
- Add a new destination with name, image, description, and continent
- All interactions are handled asynchronously (no page reloads)

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone git@github.com:cjkakai/travel-destination-places.git
   cd  travel-destination-places

2. Install JSON Server
bash
npm install -g json-server

3.Start JSON Server
   Make sure you have a db.json file with destination data. Then run:
   bash
   json-server --watch db.json
   Open the Project

4.Open index.html in your browser to use the app.