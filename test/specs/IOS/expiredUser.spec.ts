import OnBoardingPage from "../../pageobjects/iosPageObject/onBoardingPage";
import SubscriptionPage from "../../pageobjects/iosPageObject/subscriptionPgae";
import AndroidTestData from "../../testdata/AndroidTestData.json";

describe("iOS Expired User sanity Test Cases", async () => {
    //Later merge one
    //only
    it("TC_061,TC_062. Verify that Plan listing page is displayed post login to the App as expired user", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await SubscriptionPage.verifyPlanPage("atvbetaotp@yopmail.com",AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.clickOnBackArrow();
        await OnBoardingPage.validateReactiveLGPPopup();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
        // await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

});
