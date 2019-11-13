# submarine

It's a server

*currently being used w psych sci app

## How to run

You'll need Node.js installed. You can download it at [nodejs.org](https://nodejs.org).
You'll also need to have MongoDB installed and the Mongo daemon running. Download MongoDB at [mongodb.org](https://mongodb.org)

### Environment variables

This repository requires certain environment variables to run. Create a `.env` file in the root directory with the following keys:

```
MONGO_CONNECTION_STRING=mongodb://localhost:27017/submarine

# Pick any string.
SESSION_SECRET=
```

### Running

Run the following commands in your console after cloning this repository:

```console
npm install
npm start
```
