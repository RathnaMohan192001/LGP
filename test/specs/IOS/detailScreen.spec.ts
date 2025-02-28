import OnBoardingPage from "../../pageobjects/iosPageObject/onBoardingPage";
import SubscriptionPage from "../../pageobjects/iosPageObject/subscriptionPgae";
import AndroidTestData from "../../testdata/AndroidTestData.json";

describe("iOS Detail Screen sanity Test Cases", async () => {
    //only
    it("TC_021,TC_041,TC_043. Validate the attributes in movie detail screen as a Non-subscribed/Subscribed user", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.subscribed_Username1,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.validateMovieDetailScreen();
        await OnBoardingPage.clickOnMovieDownload();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

    it("TC_022,TC_040,TC_042. Validate the attributes in shows detail screen as a Non-subscribed/Subscribed user", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.subscribed_Username1,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.validateShowsDetailScreen();
        await OnBoardingPage.clickOnShowDownload();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });
});
