import {Locator, Page} from "@playwright/test";
import { variables } from "../utils/variables";

export class HomePage {
    readonly page:Page

    private postalCode  : Locator
    private houseNumber : Locator
    private continueBtn : Locator
    
    private formId    : Locator

    constructor (page: Page) {
        this.page = page

        this.postalCode    = this.page.locator('[name="postalCode"]')
        this.houseNumber   = this.page.locator('[name="houseNumber"]')
        this.continueBtn   = this.page.locator('[data-label="'+variables.nl.continueBtn+'"]')
        this.formId        = this.page.locator('[data-gtm-form-interact-id="0"]')
    }

    async fillPostalCode (postalCode: string) {
        await this.postalCode.click()
        await this.postalCode.fill(postalCode)
    }
    async fillHouseNumber (number: string) {
        await this.houseNumber.click()
        await this.houseNumber.fill(number)
    }
    async clickContinue () {
        
        while (true) {
            const dıvCount = await this.formId.filter().locator('div').count()
            if (dıvCount === 19) {
                break
            }
        }
        await this.page.waitForTimeout(2000)
        await this.continueBtn.click({force: true})
    }
}