import { th } from "date-fns/locale";
import OnBordingPage from "../../pageobjects/androidTvPages/onBoardingPage";
import AndroidTestData from "../../testdata/AndroidTV.json";
import { remote } from 'webdriverio';

describe("AndroidTV Signup and Login sanity Test Cases", async () => {
    it("TC_007. Validate Login via Password through Mobile number from Onboarding screen", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.validateLoginScreen();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await OnBordingPage.enterLoginCredential(AndroidTestData.OnBoarding.enterMobileNumb, AndroidTestData.OnBoarding.subscribed_Password);
        await browser.pause(180000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.pause(2000);
        await OnBordingPage.validateHomeIcon();
        await OnBordingPage.clickOnLogout()
    });

    it.skip("TC_010. Validate Sign-up through Email from Onboarding screen", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.validateSignupThroughMail();
    });
})