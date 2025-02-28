import OnBoardingPage from "../../pageobjects/iosPageObject/onBoardingPage";
import SubscriptionPage from "../../pageobjects/iosPageObject/subscriptionPgae";
import AndroidTestData from "../../testdata/AndroidTestData.json";

describe("iOS Subscription sanity Test Cases", async () => {
    //only
    it("TC_014,TC_015. Validate that plan selection screen with Proper price points", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await SubscriptionPage.verifyPlanPage(AndroidTestData.OnBoarding.non_Subscribed_Username,AndroidTestData.OnBoarding.subscribed_Password);
        await SubscriptionPage.verifythreeMonthPlan();
        await SubscriptionPage.verifyTwelvethMonthPlan();
        await OnBoardingPage.clickOnBackArrow();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });
});
