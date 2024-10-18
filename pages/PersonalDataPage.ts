import {Locator, Page} from "@playwright/test";
import { variables } from "../utils/variables";

export class PersonalDataPage {
    readonly page:Page

    private genderMale  : Locator
    private phoneNumber : Locator
    private email     : Locator
    private firstName : Locator
    private lastName  : Locator
    private initials  : Locator
    private birthDay  : Locator
    private birthMonth: Locator
    private birthYear : Locator
    private continueBtn : Locator

    constructor (page: Page) {
        this.page = page

        this.genderMale= this.page.locator('[data-label="'+variables.nl.user.gender+'"]')
        this.firstName  = this.page.locator('[name="firstName"]')
        this.lastName   = this.page.locator('[name="surname"]')
        this.initials   = this.page.locator('[name="initials"]')
        this.birthDay   = this.page.locator('[name="day"]')
        this.birthMonth = this.page.locator('[name="month"]')
        this.birthYear  = this.page.locator('[name="year"]')
        this.phoneNumber = this.page.locator('[name="phoneNumber"]')
        this.email = this.page.locator('[name="emailAddress"]')
        this.continueBtn = this.page.getByRole('button', { name: variables.nl.continue })
         
    }


    async chooseGender (gender: string) {
        if (gender.toLowerCase() === 'male') {
            await this.genderMale.waitFor({state:'attached'})
            await this.genderMale.check()
        }
    }

    async fillFirstName (data : string) {
        await this.firstName.fill(data)
    }
    async fillLastName (data : string) {
        await this.lastName.fill(data)
    }
    async fillInitials (data : string) {
        await this.initials.fill(data)
    }
    async fillBirthDay (data : string) {
        await this.birthDay.fill(data)
    }
    async fillBirthMonth (data : string) {
        await this.birthMonth.fill(data)
    }
    async fillBirthYear (data : string) {
        await this.birthYear.fill(data)
    }
    async fillEmail (data: string) {
        await this.email.fill(data)
    }
    async fillPhoneNumber (data: string) {
        await this.phoneNumber.fill(data)
    }
    async clickContinue () {
        await this.continueBtn.click()
    }
}