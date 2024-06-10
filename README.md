# Water Tracker

Water Tracker is a web application for tracking daily water consumption, the application can calculate the required volume of daily water consumption according to the client's parameters, such as gender, weight, number of hours of sports during the day. The user has the possibility to register on the resource, personalize the account by adding an avatar, name and gender. Viewing of information for the day, current month and previous months has been implemented, the user can view information about all consumed water recorded for the entire time of using the application. The application is made with an adaptive layout for phones (320x), tablets (768x) and desktops (1440). This project is implemented using React, Redux and Vite. This is the repository of the Front-End part, the Back-End is written in Node.js, can be found at the link: https://github.com/seheichenko-anna/water-tracker-backend

## Installing dependencies:

To install the dependencies, run the following command:

    ```bash
    npm install
    ```


## Run of project

To run the project in development mode, run the following command:

    ```bash
    npm run dev
    ```


## Project structure

Header - a navigation element that contains a logo-link, as well as for an unregistered/unauthorized user a key to go to the login page, and for an authorized user an element with a name and an avatar and the ability to go to the settings or exit the application

WelcomePage - a page for an unregistered/unauthorized user with basic information about the application and the ability to go to the registration page

SignUp - page for registration

SignIn - page for login

MainPage - the main page of the application on which there is a calendar, keys for adding information about consumed water, a list with information about consumed water and a key for editing the desired goal of daily water consumption
