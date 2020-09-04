LG='\033[1;32m'
LY='\033[1;33m'
NC='\033[0m' # No Color

rm ./source/actorlist
rm ./source/scenelist
clear

printf "\n${LY}Found actor files:\n${NC}"
ls ./source/actors

printf "\n${LY}Writing actorlist..."
ls ./source/actors >> ./source/actorlist
printf "OK\n${NC}"

printf "\n${LY}Found scene files:\n${NC}"
ls ./source/scenes

printf "\n${LY}Writing scenelist..."
ls ./source/scenes >> ./source/scenelist
printf "OK\n${NC}"

printf "\n${LY}Running build.js..."
node ./build.js
printf "${LY}OK\n${NC}"

printf "\n${LY}Displaying actor-list.json\n${NC}"
cat ./source/actor-list.json

printf "\n${LY}Displaying scene-list.json\n${NC}"
cat ./source/scene-list.json

rm ./source/actorlist
rm ./source/scenelist

printf "\n\n${LG}Done building... press any key to exit\n${NC}"
read -n 1