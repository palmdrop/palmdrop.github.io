#!/bin/bash

git submodule update --init --recursive

# goo-poem
cd modules/goo-poem
npm i
npm run build

cd ../../
[ -d "./goo-poem" ] && rm -r "./goo-poem"
cp -r ./modules/goo-poem/dist ./goo-poem