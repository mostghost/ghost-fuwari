#!/bin/bash


find . -type f -iname "*.png" -exec sh -c '
  for png; do
    webp="${png%.png}.webp"
    if [ -f "$webp" ]; then
      printf "Already exists, skipping: %s\n" "$webp"
    else
      printf "Converting: %s → %s\n" "$png" "$webp"
      cwebp -q 80 "$png" -o "$webp"
    fi
  done
' sh {} +
