#!/usr/bin/env bash

IMAGE="cs-studio"

#Build image if no existing image
sudo docker image inspect "$IMAGE" &> /dev/null
if [ $? -eq 1 ]; then
    sudo docker build \
    --build-arg USER_NAME=$(id --user --name) \
    --build-arg USER_ID=$(id --user) \
    --build-arg GROUP_NAME=$(id --group --name) \
    --build-arg GROUP_ID=$(id --group) \
    --tag $IMAGE \
    .
fi

#Run Image
sudo docker run -it \
  --rm \
  -h $(hostname) \
  --name cs-studio_container \
  --network host \
  --env="DISPLAY=unix$DISPLAY" \
  --volume="/tmp/.X11-unix:/tmp/.X11-unix" \
  --volume="./workspaces:$HOME/workspaces" \
  $IMAGE \
  cs-studio > /dev/null
  #/bin/bash #for debug