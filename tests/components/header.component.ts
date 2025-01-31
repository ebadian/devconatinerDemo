import { Component } from "./component";
import { Page } from "@playwright/test";

export class ModHeader extends Component {

    constructor(page: Page){
        super(page, 'masthead');
    }

    readonly signinLink = this.root.locator("moduk-account-header__link")

    async signin() {
        await this.signinLink.isVisible();

    }

}
