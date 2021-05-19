# README #
This is a basic weather station running serverless on Netlify.
In particular, it shows how to encapsulate an API Token and URL so that it is not visible client-side.

This is closely based on Netlify's own example provided at
https://github.com/netlify/code-examples/tree/master/function_examples/token-hider
and adapted to work with the tomorrow.IO weather API

See the blog post at tomorrow.IO for a walkthrough of this functionality

## Function ##
Weather Data for a specific hard-coded location is obtained from the tomorrow.IO API
The API is called every 15 minutes to update new forecast data, and a button allows for an immediate update.

## To Do ##
To clone this and set up your own Netlify page derived from this, you will to add to environment variables
on Netlify -> Deploys -> Deploy Settings -> Build & Deploy -> Environment -> Environment Variables
add the following two variables:
API_TOKEN = "your_tomorrow.io_api_token"
API_URL = "https://api.tomorrow.io/v4/timelines"

