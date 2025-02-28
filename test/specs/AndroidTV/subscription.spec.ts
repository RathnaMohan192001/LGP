import { th } from "date-fns/locale";
import OnBordingPage from "../../pageobjects/androidTvPages/onBoardingPage";
import SubscriptionPage from "../../pageobjects/androidTvPages/subscriptionPage";
import AndroidTestData from "../../testdata/AndroidTV.json";
import { remote } from 'webdriverio';

describe("AndroidTV Subscriptions sanity Test Cases", async () => {
    it("TC_037,TC_038,TC_039. Validate that plan selection screen with Proper price points ", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.validateLoginScreen();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await OnBordingPage.enterLoginCredential(AndroidTestData.OnBoarding.non_Subscribed_Username, AndroidTestData.OnBoarding.subscribed_Password);
        await browser.pause(10000);
        await SubscriptionPage.validateGooglePlay();
        await SubscriptionPage.validateMonthAndPrice();
        await browser.pressKeyCode(4);
        await OnBordingPage.clickOnPayLaterBtn()
        await browser.pause(10000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.pause(2000);
        await OnBordingPage.validateHomeIcon();
    });

});
