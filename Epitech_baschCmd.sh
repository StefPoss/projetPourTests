#!/bin/bash
if [ $# -ne 1 ]; then
echo usage: $0 input
else

p=$1
t=30

find "${p}" -mindepth 1 -maxdepth 1 -type f \( ! -mtime -"$t" \) -exec rm {} \;
fi

for i in {00..30}
do
date -d "$i day ago" > days_${i}
done
cat days_*

declare -a ago
a=($(cat <<< "
serever1
server2
server3
dbserver1
dbserver2"))

for i in "${a[@]}"
do
  [[ $i =~ 2$ ]] || echo $i
done