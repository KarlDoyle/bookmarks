# Getting started.

`backend` controls the api
`frontend` is the public facing website

## Backend

### Adding secret values

in `/backend/Vagrantfile` replace the following strings with your values

```
ENV['BOOKMARKS_SECRET_KEY']
ENV['BOOKMARKS_FACEBOOK_ID']
ENV['BOOKMARKS_FACEBOOK_SECRET']
```

### Starting the

`cd backend`

`vagrant up`

`vagrant ssh`

`python start.py`

## starting frontend

Ensure you have Node and NPM installed.

`cd frontend`

`npm install`

`npm start`
