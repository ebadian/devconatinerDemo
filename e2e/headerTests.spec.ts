
import { ModHeader } from "../tests/components/header.component";
import { test, expect } from '@playwright/test';


test('header has to have the right text', async({page}) => {
    const header = new ModHeader(page);

    const isVisible = await header.isVisible();
    await header.signin();


});