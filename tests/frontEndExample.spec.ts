import { test, expect } from '@playwright/test';
import { variables } from '../utils/variables';
import { removeAlertMessage, clickNextPage } from '../utils/helpers';
import { HomePage } from '../pages/HomePage';
import { ServicePage } from '../pages/ServicePage';
import { PersonalDataPage } from '../pages/PersonalDataPage';

test.beforeEach (async ({page}) => {
  await page.goto('/');
  await removeAlertMessage(page)
})


test('Customer use the post code to get energy service', async ({ page }) => {
  const homePage = new HomePage(page)
  const servicePage = new ServicePage(page)

  await homePage.fillPostalCode(variables.nl.postalCode)
  await homePage.fillHouseNumber(variables.nl.houseNumber)
  await homePage.clickContinue()

  expect(await servicePage.getHeaderText()).toBe(variables.nl.energyChoiceQuestion)
})

test('Customer fill information for new energy', async ({ page }) => {
  const homePage = new HomePage(page)
  const servicePage = new ServicePage(page)
  const personalDataPage = new PersonalDataPage(page)

  await homePage.fillPostalCode(variables.nl.postalCode)
  await homePage.fillHouseNumber(variables.nl.houseNumber)
  await homePage.clickContinue()

  await servicePage.chooseEnergy('gas')
  await clickNextPage(page)

  await servicePage.chooseConsuming('yes')
  await clickNextPage(page)

  await servicePage.fillGasUsage('100')
  await clickNextPage(page)

  await servicePage.chooseMoving('yes')
  await clickNextPage(page)
  await clickNextPage(page)

  await servicePage.clickProposalButton()
  await servicePage.clickYourDataButton()
  await clickNextPage(page)
  await servicePage.chooseAddressCheck('yes')
  await clickNextPage(page)

  await personalDataPage.chooseGender('male')
  await personalDataPage.fillFirstName(variables.nl.user.firstName)
  await personalDataPage.fillLastName(variables.nl.user.lastName)
  await personalDataPage.fillInitials(variables.nl.user.initials)
  await personalDataPage.fillBirthDay(variables.nl.user.birthDay)
  await personalDataPage.fillBirthMonth(variables.nl.user.birthMonth)
  await personalDataPage.fillBirthYear(variables.nl.user.birthYear)
  await clickNextPage(page)

  await personalDataPage.fillEmail(variables.nl.user.email)
  await personalDataPage.fillPhoneNumber(variables.nl.user.phone)
  await personalDataPage.clickContinue()

  await page.waitForTimeout(1000)
  expect(await servicePage.getHeaderText()).toBe(variables.nl.finishPageTitle)
})
