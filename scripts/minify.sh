#!/bin/bash

# Check if npm is installed
if ! [ -x "$(command -v npx)" ]; then
    echo "npx is not installed. Please install it by running 'npm install -g npx'."
    exit 1
fi

# Define the path to the dist folder
DIST_FOLDER="./dist"

# Find and minify all .js files in the dist folder (excluding .min.js files)
find "$DIST_FOLDER" -name '*.js' ! -name '*.min.js' | while read -r file; do
    # Create minified version using npx to access local Terser
    npx terser "$file" -o "${file%.js}.min.js" --compress --mangle
    
    # Check if minification was successful
    if [ $? -eq 0 ]; then
        echo "Minified: $file"
    else
        echo "Failed to minify: $file"
    fi
done

echo "Minification completed."
