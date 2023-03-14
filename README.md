![The Force Hub logo](./src/assets/TheForceHubLogoWhite.png)

## What is The Force Hub

The Force Hub is an app that allows you to search for Star Wars characters and view their information. With The Force Hub, you can easily find your favorite Star Wars character and learn about him. Whether you're a die-hard Star Wars fan or just getting started with the franchise, The Force Hub is the ultimate tool for exploring the Star Wars universe.

## The Force Hub logo

The Force logo was born with the concept of maintaining the idea of "the Force", characterized by the Jedi in the saga. For this, a clear and simple logo was constructed, with the detail of representing a lightsaber in the T of "The".

## The Force Hub web

![The Force Hub app](./public/presentation.gif)
[Use TheForceHub app yourself!](https://theforcehub.netlify.app/)
The Force Hub website is currently oriented towards exclusively searching for characters, but it could be expanded to search for vehicles, planets, species, and everything that the Swapi API allows.
Since it is an external API, the speed of the site is limited to the response speed of the API.

### The Force Hub app usage

To use the app, all you have to do is search for the character you want to obtain in the search bar located at the top of the page. If there is more than one character found with the search, the website will return the results listed by pages with ten elements each. Here, all you have to do is click on the character you were looking for, and it will be added to your search list. You can also view all the characters, either with the button on the home page or by performing a blank search from the search bar. This will again list all the characters returned by the API, paginated in 10-element increments.
You can check your searches at any time in the "My searches" section, where all the characters you have added will be listed. To better view each character, you will have two filters at the top to filter by gender or by the movie in which they appear.

## The Force Hub development

The Force Hub is built with React, using react-router-dom and Tailwind. It uses icons from React Icons.

#### The Force Hub in local

To use and customize TheForceHub locally, you must:

- Clone the repository locally: git clone https://github.com/Tomas-Izuel/TheForceHub.git
- Run proyect (in terminal): npm run dev

### Build proyect

To build The Force Hub:

- npm run build
