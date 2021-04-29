### Applitools Cypress Interactive Testing  
To view the Applitools Cypress SDK click [here](https://www.npmjs.com/package/@applitools/eyes-cypress)
## Pre-Requisites
1.  Install node [here](https://nodejs.org/en/) or for a mac user: `brew update` and then `brew install node``
2.  Register to Applitools and [create an account](https://auth.applitools.com/users/register)
3.  Ensure you have your Applitools API Key!

## Hackathon Overview
Imagine you wrote tests for the [1st Version of the App (V1)](https://demo.applitools.com/hackathon.html)

Then [Next Version (V2)](https://demo.applitools.com/hackathonV2.html) came along later and has changes. (including bugs) Some of these bugs are functional bugs and some of are visual bugs. 

**The Challenge**

Write an automated test for both versions which leverages Applitools. Run both a traditional test (provided) and the new test you wrote. Compare the results.

**Instructions**

1.  Review Traditional Script (provided) TraditionalSuite has been provided to you, as we assume you have already written these scripts before. Analyze them, make sure they are ok, and feel free to add any additional coverage/lines of code you see fit.
2.  Run the test suite against both Version 1 and Version 2. You are going to find a lot of failures in Version 2. (changes have been made, including bugs)
3.  Review the scripts again, and review how many assertions and locators required to cover all the elements in the page.
4.  Open the VisualAISuiteSolution and set your ApiKey in string 'eyes.api_key = "api_key"' (or comment the string and set APPLITOOLS_API_KEY environment variable), or write to the terminal: `export APPLIOOLS_API_KEY=<APPLITOOLS_API_KEY>`
5.  Modified the different tests in VisualAISuite to include visual assertion to achieve the same coverage as with the TraditionalSuite.
6.  Run the same test again and see all the differences between the screenshots of the 1st version and the 2nd version of the app.

Note: When you run the tests against V2, you’ll see differences in screenshots because the app is actually different. You should see exactly what those differences are (highlighted in pink) in Applitools dashboard.

## Running the Example

1.  Download the Example
    -  Option 1:  `git clone https://github.com/applitools/cs-applitools-cypress-hackathon.git`
    -  Option 2:  Download it as a Zip file and extract it
2.  Run the Project inside Visual Studio Code

**In order to run the test from commandLine:**

3.1.  Open a commandLine window

3.2.  Navigate to the recently cloned folder cs-applitools-java-hackathon
-  run `npm install`
- run `npx eyes-setup`
- run for a mac: `export APPLITOOLS_API_KEY=<YOUR_API_KEY>` for windows: `set APPLITOOLS_API_KEY=<YOUR_API_KEY>`
  
3.3.  Run one of the following commands for Traditional Test Suite
-  Run the Traditional Test Suite on Version 1: 
    -  `npm run TraditionalSuiteV1`
 -  Run the Traditional Test Suite on Version 2:
    -  `npm run TraditionalSuiteV2`
    
3.4.  Run one of the following commands for Visual Test Suite, which you wrote:
- To run Visual AI Test Suite on Version 1:
    - `npm run VisualAITestV1`
- To run Visual AI Test Suite on Version 2:
    - `npm run VisualAITestV2`

## To See the Full Solution

5. Run the VisualAISuiteSolution:
    - Run the Visual AI Suite Solution on Version 1: 
       - `npm run VisualAITestSolutionV1`
    -  Run the Visual AI Suite Solution on Version 2:
       -  `npm run VisualAITestSolutionV2`
       
### After Running the command, make sure to click on the correct file in the Cypress window!

## Next Steps!

Once you’ve done the checks listed above: 
6. Run your existing test on this UltraFastGrid Configuration: 

- (Chrome) iPad, (Chrome) Kindle Fire HDX in Landscape Mode, Safari 1200x800.
- Hint: [Device Names](https://github.com/applitools/eyes.sdk.javascript1/blob/master/packages/eyes-sdk-core/lib/config/DeviceName.js)

7. From the Applitools dashboard, use “Group By” to group tests by their test name. Send Casey a screenshot when you’ve done this. 

8. Create layout regions over dynamic content on the “Login Attempt - Success” test. Save these changes to the baseline. Be sure to enable “Auto-Maintenance: Batch” to apply to multiple tests at once. 

9. Bonus: Ignore the “password” css selector using the Applitools SDK in your eyesCheckWindow calls. (Hint, see the docs [here](https://www.npmjs.com/package/@applitools/eyes-cypress))


