import { th } from "date-fns/locale";
import OnBordingPage from "../../pageobjects/androidTvPages/onBoardingPage";
import AndroidTestData from "../../testdata/AndroidTV.json";
import { remote } from 'webdriverio';

describe("AndroidTV Expired User sanity Test Cases", async () => {
    it("TC_021,TC_022. Verify that Plan listing page is displayed post login to the App as expired user", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.validateLoginScreen();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await OnBordingPage.enterLoginCredential(AndroidTestData.OnBoarding.non_subscribed_Username1, AndroidTestData.OnBoarding.subscribed_Password);
        await browser.pause(18000);
        await OnBordingPage.clickOnPayLaterBtn()
        await browser.pause(5000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.pause(2000);
        await OnBordingPage.validateHomeIcon();
        await browser.keys(['ArrowRight']);
        await OnBordingPage.clickOnPlayBtn();
        await browser.pause(2000);
        await OnBordingPage.validateSubcriptionPopup();
    });

});
