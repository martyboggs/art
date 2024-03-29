#! /usr/bin/env bash

i=17

for file in 4x3/*; do 
    if [[ $file == *.png ]]
    then
        magick $file -crop 50%x+0+0 $i.png
        i=`expr $i + 1`
        magick $file -crop 50%x+1232+0 $i.png
        i=`expr $i + 1`
        magick $file -crop 50%x+0+928 $i.png
        i=`expr $i + 1`
        magick $file -crop 50%x+1232+928 $i.png
        i=`expr $i + 1`
        rm $file
    fi
done

# curl -d '{"style": "art", "noise": "3", "x2": "2", "input": "URL"}' -H 'X-API-KEY:4502c124653f4bed9ffade2c6bfc42af' https://bigjpg.com/api/task/