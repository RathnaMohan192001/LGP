import OnBoardingPage from "../../pageobjects/iosPageObject/onBoardingPage";
import AndroidTestData from "../../testdata/AndroidTestData.json";

describe("iOS OnBoarding sanity Test Cases", async () => {
   
    //only
    it("TC_001,TC_002,TC_003,TC_008. Validate user is redirected to Home screen for Subscribed user", async () => {
        await OnBoardingPage.verifySplashScreen();
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.verifyIntroScreen();
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.subscribed_Username,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

    it("TC_004. Validate user is redirected to Payment method screen for Non Subscribed user", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.verifyPlanPage(AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.clickOnBackArrow();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });
});
