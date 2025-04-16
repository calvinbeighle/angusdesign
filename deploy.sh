#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting deployment process...${NC}"

# Check if we're in the right directory
if [ ! -d "public" ]; then
    echo -e "${RED}Error: Must be run from the angusdesign root directory${NC}"
    exit 1
fi

# Create nimble directory if it doesn't exist
if [ ! -d "public/nimble" ]; then
    echo -e "${GREEN}Creating nimble directory...${NC}"
    mkdir -p public/nimble
fi

# Clone or update nimble repository
if [ -d "public/nimble/.git" ]; then
    echo -e "${GREEN}Updating nimble repository...${NC}"
    cd public/nimble
    git pull
    cd ../..
else
    echo -e "${GREEN}Cloning nimble repository...${NC}"
    git clone https://github.com/calvinbeighle/nimble-ux-design.git public/nimble
fi

# Add and commit changes
echo -e "${GREEN}Adding changes to git...${NC}"
git add public/nimble
git commit -m "Update nimble subdomain" || echo "No changes to commit"

# Push to main branch
echo -e "${GREEN}Pushing to main branch...${NC}"
git push origin main

echo -e "${GREEN}Deployment process completed!${NC}"
echo -e "${GREEN}Your site will be automatically deployed to Vercel.${NC}"
echo -e "${GREEN}You can check the deployment status at:${NC}"
echo -e "${GREEN}https://vercel.com/calvinbeighles-projects/angusdesign${NC}" 