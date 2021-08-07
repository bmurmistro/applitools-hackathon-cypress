### Applitools Cypress Interactive Testing  
To view the Applitools Cypress SDK click [here](https://www.npmjs.com/package/@applitools/eyes-cypress)
## Pre-Requisites
1.  Install node [here](https://nodejs.org/en/) or for a mac user: `brew update` and then `brew install node``
2.  Download the Example
    -  Option 1:  `git clone https://github.com/bmurmistro/applitools-hackathon-cypress`
    -  Option 2:  Download it as a Zip file and extract it
3.  Navigate to the recently cloned folder cs-applitools-java-hackathon
    -  run `npm install`
    -  run `npx eyes-setup`
4.  If you don't have an account with Applitools, register and [create an account](https://auth.applitools.com/users/register)
5.  Ensure you have your Applitools API Key! Set it in applitools.config.js. 
6.  Set your batch name to include your breakout team name. Can be the Team Leader's name if you don't think of anything. If you want to follow along on your own, simply put use your name.
7.  Set your App name (In cy.eyesOpen) to the same team name. 

## Hackathon Overview
Imagine you wrote tests for the [1st Version of the App (V1)](https://demo.applitools.com/hackathon.html)

Then [Next Version (V2)](https://demo.applitools.com/hackathonV2.html) came along later and has changes. (including bugs) Some of these bugs are functional bugs and some of are visual bugs. 

**The Challenge**

Write an automated test for both versions which leverages Applitools. Run both a traditional test (provided) and the new test you wrote. Compare the results.

**Instructions**

1.  Review Traditional Script (provided) TraditionalSuite has been provided to you, as we assume you have already written these scripts before. Analyze them, make sure they are ok, and feel free to add any additional coverage/lines of code you see fit.
2.  Run the test suite against both Version 1 and Version 2. You are going to find a lot of failures in Version 2. (changes have been made, including bugs)
    -  Run the Traditional Test Suite on Version 1: 
        -  `npm run TraditionalSuiteV1`
    -  Run the Traditional Test Suite on Version 2:
        -  `npm run TraditionalSuiteV2`
3.  Review the scripts again, and review how many assertions and locators required to cover all the elements in the page.
4.  Modified the different tests in VisualAISuite to include visual assertion to achieve the same coverage as with the TraditionalSuite.
5.  Run the same test again and see all the differences between the screenshots of the 1st version and the 2nd version of the app.
    - To run Visual AI Test Suite on Version 1:
        - `npm run VisualAITestV1`
    - To run Visual AI Test Suite on Version 2:
        - `npm run VisualAITestV2`
        
Note: When you run the tests against V2, you’ll see differences in screenshots because the app is actually different. You should see exactly what those differences are (highlighted in pink) in Applitools dashboard.

## To See the Full Solution

6. Run the VisualAISuiteSolution:
    - Run the Visual AI Suite Solution on Version 1: 
       - `npm run VisualAITestSolutionV1`
    -  Run the Visual AI Suite Solution on Version 2:
       -  `npm run VisualAITestSolutionV2`
       