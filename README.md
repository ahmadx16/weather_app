# Weather App (ReactJs and Redux)

You can search for weather of cities, states or countries using this application. This application uses an [Open Weather external API](https://openweathermap.org/forecast5) to extract weather data and display graphs of temperature, pressure and humidity to the user.

## Technical Description
This application is built with [React](https://reactjs.org/) and [Redux](https://redux.js.org/). React helps creating reusable components quite easily that can be used across various projects. Redux helps maintaining the state of the data across the application.

Upon searching the new weather of the city/state/country the previous data is pushed down to the screen it is achieved via *Redux* global data state management.

## Interface

It has a responsive interface!

![Weather App](readme_files/weather_app_demo.gif)

## Instructions

Following are the instructions that you need perform in order to run the application.

1. [Clone the repository](#clone-the-repository)
1. [Environment Setup](#environment-setup)
1. [Running the Application](#running-the-application)
1. [Troubleshooting](#troubleshooting)

## Clone the Repository

Clone this repository and switch to the `weather_app` branch as it currently contains the latest code. Run the following commands on your shell.

``` shell
git clone https://github.com/ahmadx16/weather_app.git
cd weather_app/
git checkout weather_app
``` 

The above commands will download the repository and switch the branch.

## Environment Setup

This application requires [Nodejs and npm](https://nodejs.org/en/) (npm now comes with node by default) installed on the system to execute. You can learn how to install on provided links. It is recommended to install latest version of node and npm. 
After you have installed node and npm run following command.

``` shell
npm install
```

This command will install all the packages that has been specified in `package.json` file.

## Running the Application

Run following command to start the application

``` shell
npm start
```

The above command will start the development server on `http://localhost:3000`

## Troubleshooting

On running command `npm start` you may or may not get the error `Error: ENOSPC: System limit for number of file watchers reached` . It occurs when system file watching limit exceeds. You can simply fix this error either by using command `sudo npm start` or increasing the file watchers limit. Learn about how to increase file watchers on Ubuntu [here](https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached)



___
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
