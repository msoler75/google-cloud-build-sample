# Google Cloud Build sample

This project is for learning to:

- set up project in github 
- this repository is read from Google Cloud triggers/activators
- built in Google Cloud Build
- passing secret ENV parameteres
- and deployed in Google Cloud Run

Here, the clue is use ENVironment variables by .env file, that must be not published in this repository.

So you to test this project, you must create local .env file with this content:

```
PORT=3333
SECRET_KEY=nobody_must_read_this
```

