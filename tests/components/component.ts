import { Locator, Page } from "@playwright/test";

export class Component {
    protected root: Locator;

    constructor(protected page: Page, selector: string) {
        this.root=page.locator(selector);
    }

    async isVisible() {
        return await this.root.isVisible();
    }
} 