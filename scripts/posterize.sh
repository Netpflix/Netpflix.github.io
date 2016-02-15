# resizes the given images to the shape of movie posters

# convert skypfall.png -resize 300x400 -gravity center -extent 300x400 -background black out.png

## an array of images
declare -a arr=("skypfall.png" "pfellowship-of-the-ring.png" "pfinding-nemo.png" "pforrest-gump.png" "the-pforz-awakens.png" "back-to-the-pfuture.png")

## go to image folder
cd ../public/img

## loop through the above array
for i in "${arr[@]}"
do
   convert "$i" -resize 450x600 -gravity center -background black  -extent 450x600 posters/"$i"
done

echo "Resizing done!"
