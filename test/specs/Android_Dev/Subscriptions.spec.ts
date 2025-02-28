import OnBordingPage from "../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import SubscriptionsPage from "../../pageobjects/androidPageObjects/AndroidSanity/subscriptionsPage";
import PlayerPage from "../../pageobjects/androidPageObjects/AndroidSanity/playerPage";


describe("Android Subscriptions sanity Test Cases", async () => {
    //only
    it("TC_016. Validate that plan selection screen with Proper price points ", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await PlayerPage.changeEnv();
        await OnBordingPage.enterLoginCredential("lgbanglatest@gmail.com");
        await SubscriptionsPage.validateListScreenWithBillAndPeriodFor3MonthsPlan();
        await SubscriptionsPage.validateListScreenWithBillAndPeriodFor12MonthsPlan();
    });

    it("TC_017. Validate that user is navigated to Home screen post tapping on 'PAY LATER' CTA in Plan selection screen", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await PlayerPage.changeEnv();
        await OnBordingPage.verifyPaymentMethodScreenTitle();
        await SubscriptionsPage.validatePayLaterBtn();
        await OnBordingPage.validateHomePage();
    });

});
