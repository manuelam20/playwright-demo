// step-definitions/homepage.ts
import { Given, When, Then } from "@cucumber/cucumber";
import { OurWorld } from "../types";
import { expect } from "@playwright/test";
// Using a cucumber expression
Given("I go to google", async function (this: OurWorld) {
    const { page } = this;
    await page?.goto('google.com');
});
// Using a regular expression
When("I search some value", async function (this: OurWorld) {
    const { page } = this;
    await page?.click('username');
});
Then("I expect to see the searching list", async function (
    this: OurWorld
) {
    const { page } = this;
    const heading1Text = await page?.isVisible('#before-appbar');
    expect(heading1Text).toBeFalsy
});
