#!/bin/bash

if [ ! -d "node_modules" ]; then
  # Install server dependencies
  npm install
fi


# npm run client &

npm run server