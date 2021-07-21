# Google Cloud Build sample

This project is for learning to:

- set up project in github 
- automating Google Cloud Build
- passing secret ENV parameteres in Google Cloud Build
- and deployed in Google Cloud Run

Read more: 
https://cloud.google.com/build/docs/automating-builds/create-manage-triggers


## Description

This is a simple node.js server project emulating two-step deployment process, in two scripts:

- npm run build
- npm run start

Here, the clue is use ENVironment variables by .env file, that is not published in this repository, because contain secret information. E.g: API KEYS

So you to test this project, you must create local .env file with this content:


.env:

```
PORT=3333
SECRET_KEY=nobody_must_read_this
```

