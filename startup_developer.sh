#!/bin/bash

sass --watch style/sass/:style/css --style compressed &
#livereload -p 9000 -w 01
livereload -w 01&
php -S localhost:8001 
exit 0
