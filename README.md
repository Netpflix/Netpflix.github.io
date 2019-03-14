# Netpflix

## Running locally

Once you've cloned the repo, run the following in your terminal. You'll need to have Ruby installed (it's pre-installed on macOS and most Linux distributions.)

```
sudo gem install bundler
bundle install
```

To run the app, run this in your terminal:

```
bundle exec jekyll serve
```

Then open up <http://127.0.0.1:4000> in your browser to view the site.

## Editing in the cloud

[Open Gitpod here](https://gitpod.com#https://github.com/Netpflix/Netpflix.github.io)
and you can edit this page instantly. Once the IDE opens, you'll see a site open
on port 4000.

Then run `bundle install` to finish getting set up.

To run the app:

```
bundle exec jekyll serve --host 0.0.0.0
```

## Guidelines for adding a new video

Add a movie poster image to <assets/img/new-posters>. It should be 720 (width) x 1113 (height).