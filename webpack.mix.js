let mix = require('laravel-mix');

mix.js('src/app.js', 'public').setPublicPath('public')
.postCss("src/app.css", "public", [
    require("tailwindcss"),
  ]);;