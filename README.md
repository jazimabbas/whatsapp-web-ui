# WhatsApp Web 
WhatsApp Web UI built with React, TypeScript, and Styled-Components.

## Table of Contents
- [Screenshots](#screenshots)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Theming](#theming)
- [Contribution](#contribution)
- [Support Me](#support-me)

## Screenshots
![entry](https://user-images.githubusercontent.com/44744039/224526394-642e3187-57c7-47e2-995e-3f67fa52eeea.png)
![dark-ui](https://user-images.githubusercontent.com/44744039/224526440-b4eb6a54-4dda-430c-a681-286f5b406fe7.png)
![dark-search](https://user-images.githubusercontent.com/44744039/224526449-02bc4f77-7071-415e-98b8-3ade74c9967b.png)
![light-chat](https://user-images.githubusercontent.com/44744039/224526453-7b835f09-e25e-4bdf-894f-c1b253a8c31d.png)
![light-profile](https://user-images.githubusercontent.com/44744039/224526456-40c82430-70cb-44e3-82ac-182efde8255f.png)


## Running the Application
To run the application, follow these steps:
1. Clone this repository to your local machine
2. Open the terminal and navigate to the project directory
3. Run `npm install` to install the dependencies
4. Run `npm start` to start the application

## Project Structure
The `common` code which can be reused in multiple parts of the application can be found in the common folder. This includes components, hooks, themes, and types. <br />
The `pages` folder contains the main pages of the application, such as the chat list and chat window. <br />
The `routes` folder contains the routes for the application.

## Theming
The application supports both light and dark themes. The theme state is managed using the Context API, which can be found in the common/themes folder. If you want to customize the existing theme, you can adjust the light and dark themes according to your needs. <br />
You can add new theme as well. Its very easy to setup. Just create a new file and define all the Theme Properties and then switch that theme in the AppThemeProvider. That's it.

## Contribution
If you would like to contribute to this project, you can clone the repository and make your changes. Before pushing your changes, make sure to run `npm run lint` to check for any linting issues. If any issues are found, you can run `npm run prettier` to fix them.

## Support Me
If you find this project useful or would like to support my work, you can [buy me a coffee here](https://www.buymeacoffee.com/jazimabbas). Your contribution will help me continue to improve this project and create new ones in the future. <br />
You can also show your support by giving this repository a star on GitHub. This will help more people discover and use the project, and let me know that you find it useful. To star the repository, simply click the "Star" button at the top of the page.
