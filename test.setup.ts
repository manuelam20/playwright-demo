import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium, ChromiumBrowser } from "playwright";


let browser: ChromiumBrowser;

declare global {
    // eslint-disable-next-line no-var
    var browser: ChromiumBrowser;
}
BeforeAll(async function () {
    browser = await chromium.launch({
        // Not headless so we can watch test runs
        headless: false,
        // Slow so we can see things happening
        slowMo: 50,
    });
});
AfterAll(async function () {
    await browser.close();
});