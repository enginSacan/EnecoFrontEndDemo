import {Locator, Page} from "@playwright/test";
import { variables } from "../utils/variables";

export class ServicePage {
    readonly page:Page

    private header  : Locator
    private gas : Locator
    private consumingYes : Locator
    private gasUsage    : Locator
    private movingYes : Locator
    private proposalBtn : Locator
    private yourDataBtn : Locator
    private addressCheckYes: Locator

    constructor (page: Page) {
        this.page = page

        this.header= this.page.locator('main h1').nth(0)
        this.gas = this.page.getByLabel(variables.nl.energyChoice)
        this.consumingYes = this.page.getByLabel(variables.nl.consumingYes)
        this.gasUsage = this.page.locator('[name="usageGas"]')
        this.movingYes = this.page.getByLabel('Ja, ik ga verhuizen')
        this.proposalBtn = this.page.getByRole('button', { name: 'Naar je aanbod' })
        this.yourDataBtn = this.page.getByRole('button', { name: 'Naar je gegevens' })
        this.addressCheckYes = this.page.getByLabel('Ja')
    
    }

    async getHeaderText () {
        await this.header.waitFor({state:"attached"})
        return await this.header.textContent()
    }
    async chooseEnergy (energy : string) {
        switch (energy.toLowerCase()) {
            case 'gas':
                await this.gas.click()
        }
    }
    async chooseConsuming (choice: string) {
        
        if (choice.toLowerCase() === 'yes') {
            await this.consumingYes.waitFor({state:'attached'})
            await this.consumingYes.click()
        }
    }
    async fillGasUsage (usage: string) {
        await this.gasUsage.fill(usage)
    }

    async chooseMoving (move: string) {

        if (move.toLowerCase() === 'yes') {
            await this.movingYes.waitFor({state:'attached'})
            await this.movingYes.click()
        }
    }
    async clickProposalButton() {
        await this.proposalBtn.waitFor({state:'attached'})
        await this.proposalBtn.click()
    }
    async clickYourDataButton() {
        await this.yourDataBtn.waitFor({state:'attached'})
        await this.yourDataBtn.click()
    }

    async chooseAddressCheck (address: string) {

        if (address.toLowerCase() === 'yes') {
            await this.addressCheckYes.waitFor({state:'attached'})
            await this.addressCheckYes.click()
        }
    }
}