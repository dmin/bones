#!/usr/bin/env bash

if [ $# -ge 1 ]
then
  for file in $1/*.js
  do
     node $file
  done
else
  echo "Usage: bones path/to/tests (use ./ for current directory)"
fi
