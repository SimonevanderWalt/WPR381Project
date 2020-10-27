Before Starting the project please ensure you have initialized the dependancies by open the command prompt 
in the WPR381_Project Folder and run the command "npm i" then "npm run restore"

The same needs to be done when pulling from the git repo

To start the webapp open the command prompt in the WPR381_Project Folder and run the command "npm start"


This project is seperated into 3 modules:
1. Back_End
2. Front_End
3. Web_Server

Back_End
=============================================
This part of the project will serve data in the form of an api which can recieve requests and return data and perform tasks.
This api will run on port 3000.
Any accessing of stored data required by the web app will be in this module e.g Database queries, external API calls, permanent file access.
To minimize client computer compute requirements all major operations will be perfomred in this module and return the required data only to 
the client.

Front_End
=============================================
This is the part of the project which will be visible to those accessing the web app. 
This part of the system will be a react app which provides the user interface to the client. Minimal processesing should be completed here to
minimize the performance requirements of the clients system (All major processesing should be done in the Back_End API and an API call should be
made). This part of the system will make calls to the above mentioned API to retireve datawhich must be displayed to the client.

Web_Server
=============================================
This part of the project will represent a web server software such as Apache Web Server or Nginx. It will serve a build optimized version of the 
front end of our web app. This will serve content on port 3001 to the clients to access

