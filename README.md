# VFR-App

Veterans and First Responders app that finds local establishments that offer discounts.

## App Functionality

1. Login Page
2. Dashboard Page
   - NavBar with with app emblem, username and to the right side links for (Getting Started, Locations Near Me, Add Business).
   - Getting Started Component that goes over the the targeted users as well as the general reason for the app. Simple walkthrough for using the app.
   - Locations Component will offer a way to input city and state and will render up results for establishments in that location that offer discounts as well as how much the discount is.
   - Add Business Component will give user the ability to add a business to database. When adding business the user will need to give the needed information:
     - Name
     - Address
     - City
     - State
     - Zip
     - Chain (Yes or No)
     - Military Discount

## Needed MySql functions

1. Should be able to create a user.
2. Should be able to add a business with needed info (see above).
3. Should be able to search for a business by name, city, state, or zip
