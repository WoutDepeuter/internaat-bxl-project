# internaat-bxl-project

## Description
This repository includes code for the mobile version of the [website of Don Bosco Boarding School at Woluwe](https://www.woluweinternaat.be/).

## Instructions to run the project:

> [!NOTE]  
> Install NodeJs before proceeding. https://nodejs.org/en (should come with "npm" and "npx" installed.)

> [!NOTE]  
> Some pages may look weird if viewed on webbrowser (pc). The primarily goal for this project was to look good on mobile (android).

A. if first time running project:

1. `npm install`
2. `npm run start`

B. if it's not the first time

1. `npm run start`

C. Docker (quite heavy, for fast local dev the above are faster.)

> [!WARNING]  
> Running the project with docker will not work if you want to test on mobile. It probably has to do with docker network. This is currently not on our priority list to fix because the above "npm run start" prevents this.

1. `docker compose up`

## Instructions to build the project:
> [!NOTE]  
> The eas tool has to be installed to be able to build the project into runnable .apk or a publishable .aab.
> Apple/iOS is currently not working and cannot be build.

A. Build the .aab file (file to be send to Google to publish application)
1. `eas build -p android --profile production`

B. Build the .apk file (file to be used to test on your own phone, locally)
1. `eas build -p android --profile apk`

## Tech stack - credits
- [Expo](https://github.com/expo/expo/)
- [FontAwesome](https://fontawesome.com/)
- ... (There may be more tech involved but for now Expo is enough, suppose send emails etc.)

## Contributers
- [Wout De Peuter](mailto:wout.de.peuter@student.ehb.be)
- [Tristan Vong](mailto:tristan.vong@student.ehb.be)

## Kanban Trello Board
[Trello Link](https://trello.com/b/t6uHu8T9/trello-internaat-bxl-project-2025)
