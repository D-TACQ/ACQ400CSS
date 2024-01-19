#!/bin/bash

# This is a script that copies an existing CS Studio workspace and replaces all of
# the instances of the original hostname with the new ones.

# new_uut is the uut workspace which will be created from the template.

# template_uut is the uut workspace which will be used to create the new workspace.
# Users can change this to whatever template they like. A UUT workspace "default_uut"
# is the default. 
template_uut=default_uut

# Set workspace location to the CSS Community edition default.
# Change this if you chose a custom location or are using an older
# version of CSS.
workspace_location=/home/$USER/CSS-Workspaces/

usage() {
    echo ""
    echo "Usage example:"
    echo "./make_new_workspace.sh -n acq2106_999 -t default_uut"
    echo "The above is the same as:"
    echo "./make_new_workspace.sh --new_uut=acq2106_999 --template_uut=default_uut"
    echo ""
    echo "The new UUT is the UUT which is to be created and the template UUT"\
    "is the workspace to be used to create the new one."
    echo ""
    exit
}


# Doing some argument processing here.
while [ "$#" -gt 0 ]; do
case "$1" in
    -n) new_uut="$2"; shift 2;;
    -t) template_uut="$2"; shift 2;;
    -l) workspace_location=$2; shift 2;;
    -h) usage; shift 2;;

    --new_uut=*) new_uut="${1#*=}"; shift 1;;
    --template_uut=*) template_uut="${1#*=}"; shift 1;;
    --workspace_location=*) workspace_location="${1#*=}"; shift 1;;
    --help=*) usage; shift 1;;

    -*) echo "unknown option: $1" >&2; exit 1;;
    *) handle_argument "$1"; shift 1;;
esac
done


# Determine if the user has input an argument UUT.
if [ "$new_uut" = "" ]; then
    usage
fi


# Move into the CSS-Workspaces directory.
cd $workspace_location


# Check the UUT workspace directory does not already exist.
if [ -d "$new_uut" ]; then
    echo ""
    echo "This workspace already exists. If you want to create it again then remove it first."
    echo ""
    exit
fi

# Let the user know which template was used just in case.
echo ""
echo "Using $template_uut as the template workspace."

# Recursively copy a default UUT workspace to the new one.
cp -r $template_uut/ $new_uut/

# Move into the new directory.
cd $new_uut

# Do a recursive search and replace for the new hostname.
find . -type f -exec sed -i 's/'$template_uut'/'$new_uut'/g' {} +

echo ""
echo "Done!"
echo ""
