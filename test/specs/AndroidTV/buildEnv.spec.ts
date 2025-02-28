import { th } from "date-fns/locale";
import OnBordingPage from "../../pageobjects/androidTvPages/onBoardingPage";
import AndroidTestData from "../../testdata/AndroidTV.json";
import { remote } from 'webdriverio';

describe("AndroidTV OnBoarding sanity Test Cases", async () => {
    it("TC_004. Validate that user is redirected to Payment method screen for Non Subscribed user", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.clickOnExploreBtn();
        await browser.pause(10000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await OnBordingPage.switchEnv()
        // await browser.pause(5000);
        // await browser.keys(['ArrowLeft']);
        // await browser.keys(['ArrowLeft']);
        // await browser.pause(2000);
        // await OnBordingPage.validateHomeIcon();
        // await OnBordingPage.clickOnLogout();
    });

});
