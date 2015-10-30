# Minimal MEAN Website : STEP 1.
STEP 1: This repository make a *minimal (M)E(A)N website*. We first use `NodesJS` and `ExpressJS` alone, together with local, hard coded .json data. When `app.js` is routing the client's requests, the ExpressJS code contains --hard coded-- the suitable JSON data and template's path to merge together for the suitable final rendering.

STEP 2: Objective is to provide a *minimal ME(A)N website*. A MongoDB CRUD API (RESTful API) is added, from which the website queries json data to feed the webpage.

###

Webpages available:
```
 + home.html
 +-- gallery.hml
 +-- team.html
 +-- contact.html
 +-- [error 404]
```

Webpages are built as follow.

```
+---------------------------------+
|            header               |
+------+-----------------+--------+
|      |                 |        |
|      |                 |        |
|body_l|     body_c      | body_r |
|      |                 |        |
|      |                 |        |
+------+-----------------+--------+
|            footer               |
+---------------------------------+
```

<img src="http://i.stack.imgur.com/kaJH3.png" width="300" float="center">

## Run
```
node app.js
chromium-browser http://0.0.0.0:3000
```


## Install
**On Linux Ubuntu**, run the following:
```shell
sudo apt-get install git make  # tools needed for install
git clone https://github.com/WikimapsAtlas/make-modules.git  #get code
cd ./make-modules

## API
Commonly used:

* **something**: name of the target/central geographic feature, according to Natural Earth spelling.

## Reference

* [TITLE](http://)

## Help
Report issues or ideas [on github](/issues).


## Authorship

* **Authors:** [Hugo Lopez](http://twitter.com/hugo_lz) —— project design, prototyping, refining. Technologies: git, gdal, ogr2ogr, imagemagick, topojson, nodejs / npm, jsdom, d3js.

## Licence

[MIT License](./LICENSE) or CC-by-sa-3.0 — LOPEZ Hugo (Yug), for the Wikimedia Foundation.
# Mini_MEAN_website
