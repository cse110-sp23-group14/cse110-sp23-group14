# Net Ninjas (Group 14)

<a href="https://codeclimate.com/github/cse110-sp23-group14/cse110-sp23-group14/maintainability"><img src="https://api.codeclimate.com/v1/badges/8f2ee10c3081178fffa7/maintainability" /></a>

## Important Links

- [Team Page](https://github.com/cse110-sp23-group14/cse110-sp23-group14/blob/main/admin/team.md)
- [Documentation](https://cse110-sp23-group14.github.io/cse110-sp23-group14/main/documentation/index.html)
- [Fortune Telling Dev Deploy](https://cse110-sp23-group14.github.io/cse110-sp23-group14/main/fortune-telling-dev/source/index.html)
- [Main Deploy]() TODO
- [8Ball PWA Test](https://cse110-sp23-group14.github.io/cse110-sp23-group14/main/test-8ball-PWA/source/8ball/index.html) TODO Merge 2 8ball branches together


## Project Overview:

This project is a website that allows you to recieve a daily horoscope based on your birthday.

## Repo Walk Through

- Repository organization:
    - Main branch is for fully done releases
    - Fortune-Telling-Dev branch is for working on new features
        - Once features are done can merge them into the main branch
    - 8 Ball branch
        - The intro project with 8ball material

## CI/CD Documentation

- Run the full CI/CD at this link: TODO add link
- Note about full CI/CD: Only run it on the main branch because deploy fails for no reason when run on other branches
- CI/CD Features
    - Multibranch Deploy
        - This action deploys the full release from the main branch as well as: 8ball, dev branch (for testing), and documentation from their respective branches.
        - Have multibranch deploy since we had to constantly change which branch pages was built off of when building the project which got annoying
        - Comments in `.yml` provide more clarity, but essentially works by copying files into main branch and deploying them all
        - Can be run manually here
    - Github Super linter
        - Works by running specified linters (ESLint, HTMLHint, and stylelint) on all the of the files in the repo
        - Style specifications for the linters found in the `.github/linters` folder.
        - Can be run manually here
    - Testing
        - Testing is done with puppeteer + Jest
        - BIG ISSUE WITH THE TESTING WORKFLOW: IT WILL PASS EVEN IF TESTS FAIL, BE SURE TO CHECK WORKFLOW AFTER IT RUNS
        - Tests found in `source/jest_test`
    - Documentation 
        - Documentation done with JSDocs
        - Built off of the fortune-telling-dev branch for most up to date docs
        - Can be run manually here




