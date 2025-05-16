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

## Tech stack - credits
- [Expo](https://github.com/expo/expo/)
- [FontAwesome](https://fontawesome.com/)
- ... (There may be more tech involved but for now Expo is enough, suppose send emails etc.)

## Contributers
- [Wout De Peuter](mailto:wout.de.peuter@student.ehb.be)
- [Tristan Vong](mailto:tristan.vong@student.ehb.be)