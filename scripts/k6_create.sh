#!/bin/bash

#  this script creates new your desired test case

#!/bin/bash

# Define the path where you want to list folder names
available_tests="load stress spike soak"
folder_path="./mytests"
test_path=$folder_path
test_type="load"
status="new"

# Create an array to store folder names
folder_names=()

# Loop through the subfolders in the specified path
for subfolder in "$folder_path"/*; do
    if [ -d "$subfolder" ]; then
        # Get the name of the subfolder
        folder_name=$(basename "$subfolder")   
        echo $folder_name 
        folder_names+=("$folder_name")
    fi
done

select choose in "new" "old"
do
    if [ "$choose" == "old" ]; then
        status="old"
    fi
    break
done

if [ $status == "new" ]; then
        # folder creating logic
        echo "Enter new folder name: "
        read newfolder
        mkdir $folder_path/$newfolder
        test_path=$test_path/$newfolder
    else 
        select f in "${folder_names[@]}"
        do
            test_path=$test_path/$f
            echo $test_path
            break
        done
fi

select test in $available_tests
do
    if [ ! -d "$test_path/$test" ]; then
        # If the folder does not exist, create it
        mkdir "$test_path/$test"
    fi
    test_type=$test
    break
done

echo "Script filename: "
read fname

test_path=$test_path/$test_type/$fname

echo $test_path
# copu from templates
cp "./k6/$test_type/get_sample.js" $test_path