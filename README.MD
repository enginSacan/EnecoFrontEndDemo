# Playwright Typescript Example

## Overview
This project contains automated test scenarios for verifying the functionalities of Eneco web site by using Playwright Typescript.

## Project Structure
- `pages`: Contains page objects for the website
- `tests`: Contains created tests

## Running the Tests
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependecies via npm:
   ```bash
   npm install
4. Run the test with command below:
   ```bash
   npx playwright test

You can check the results under folder `playwright-report`

## Test Cases

### Test Case 1
1. Go to https://www.eneco.nl/
2. Use post code (9713RD 63) to fill "Energie aanvragen? Nu vast of dynamisch" form and proceed to goto sales flow by clicking "Bereken maandbedrag" button.

### Test Case 2
1. Go to https://www.eneco.nl/
2. Automate sales flow. You may not finish the flow by pressing "Aanmelden en maandelijks betalen" in the end of the flow.