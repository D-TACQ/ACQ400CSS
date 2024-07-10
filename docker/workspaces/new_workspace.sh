#!/bin/bash

#Script use template to make new workspace
#run from workspace dir
#Usage: ./new_workspace.sh acq2106_123

new_uut=$1
template_uut='acq2106_000'
wdir=$(dirname $(realpath "${BASH_SOURCE[0]}" ))

#Check for arg
if [ -z "${new_uut}" ]; then
    echo "USAGE ./new_workspace.sh UUT_HOSTNAME"
    exit 1
fi

#Check doesnt already exist
if [ -d "$wdir/$new_uut" ]; then
    echo "${new_uut} already exists"
    exit 1
fi

#Copy and update new workspace
cp -r $wdir/template "$wdir/$new_uut/"
cd "$wdir/$new_uut/"
find . -type f -exec sed -i 's/'$template_uut'/'$new_uut'/g' {} +

echo "Workspace ${new_uut} Created"