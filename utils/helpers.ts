import {Page} from "@playwright/test";
import { variables } from "./variables";

export async function removeAlertMessage (page: Page) {
    
    await page.waitForLoadState('load')
    const alertMessage  = page.getByRole('alertdialog')

    if (await alertMessage.isVisible()) {
       await page.locator('[data-label="'+variables.nl.cookieButton+'"]').click()
    }
  }

export async function clickNextPage(page:Page) {
   const continueBtn = page.getByRole('button', { name: 'Volgende' })
    await continueBtn.waitFor({state:'attached'})
    await continueBtn.click()
}  