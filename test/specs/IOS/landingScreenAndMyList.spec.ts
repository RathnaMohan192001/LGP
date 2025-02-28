import OnBoardingPage from "../../pageobjects/iosPageObject/onBoardingPage";
import SubscriptionPage from "../../pageobjects/iosPageObject/subscriptionPgae";
import AndroidTestData from "../../testdata/AndroidTestData.json";

describe("iOS Landing Screen And MyList sanity Test Cases", async () => {
    //only
    it("TC_023,TC_024. Validate that My List is not displayed for Guest User in Movies details page", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.validateMovieAndShowMyListIcon();
    });

    it("TC_049,TC_50,TC_51,TC_52. Verify that feature carousel unit is available on Home/Shows/Movies screen", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.validateCarouselContentScreen();
    });

    it("TC_053. Verify that Continue watching rail is available for logged in user(if user watches the contents partially)", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.subscribed_Username,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.validateContinueWatching();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

  
});
