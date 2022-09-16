# ticketapprentice
A web application that is made to allow a user to buy tickets for different events through a React frontend that interacts with a Rails backend. If the user is not signed in, they can only see the events and create/login to a profile. If the user is signed in, they can buy tickets for an event, delete/view their tickets, create an event, or edit/delete their profile.

On the Home Page if the User is not logged in
  * They will see Routes: Home, SignUp, Login
  * Every Event and their information
    * If the user clicks on the event name, it brings them to a Route for the specific event
    * On the event page you can see the information about the event but won't be able to create a ticket

On the Home Page if the User is logged in
  * They will see Routes: Home, Inventory, Create New Event
  * Every Event and their information
    * If the user clicks on the event name, it brings them to a Route for the specific event
    * On the event page you can see the information about the event and can create a ticket for the event

SignUp
  * Can create a User with a unique username and has to enter the same password twice
  * Will automatically be logged in if have successfully created a user

Login
  * Must enter the username and password that is in the database

Inventory
  * Can see/delete tickets they have created.
  * Can edit/delete their account.

Create New Event
  * Can create an event with a unique name, location, date, time, price, image.