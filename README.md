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

You can use the following values to quickly test

```
export BOOKMARKS_SECRET_KEY='GciOiJIUzI1NiJ9.eyJ1c2VyIjoia2FybCJ9.NsfTohhdy'
export BOOKMARKS_FACEBOOK_ID='1157801300984266'
export BOOKMARKS_FACEBOOK_SECRET='6dddc2ab1d2e754c96857cd1c97f45f3'
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
