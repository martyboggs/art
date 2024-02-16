#! /usr/bin/env bash
magick img.png -crop 50%x+0+0 a1.png
magick img.png -crop 50%x+928+0 a2.png
magick img.png -crop 50%x+0+1232 a3.png
magick img.png -crop 50%x+928+1232 a4.png

# curl -d '{"style": "art", "noise": "3", "x2": "2", "input": "URL"}' -H 'X-API-KEY:4502c124653f4bed9ffade2c6bfc42af' https://bigjpg.com/api/task/