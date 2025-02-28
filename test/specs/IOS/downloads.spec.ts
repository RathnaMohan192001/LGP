import OnBoardingPage from "../../pageobjects/iosPageObject/onBoardingPage";
import SubscriptionPage from "../../pageobjects/iosPageObject/subscriptionPgae";
import AndroidTestData from "../../testdata/AndroidTestData.json";

describe("iOS Downloads sanity Test Cases", async () => {
    //only
    it("TC_044,TC_045.TC_046. Validate if 'Movies' and 'Shows' is available in the Empty-state screen to Download the contents", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.subscribed_Username2,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.validateDownloadScreen();
        await OnBoardingPage.cilickOnHomeIcon();
        await OnBoardingPage.validateShowsDetailScreen();
        await OnBoardingPage.clickOnShowDownload();
        await browser.pause(60000);
        await OnBoardingPage.validateDownloadedContent();
       // await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

    //only
    it("TC_047,TC_048. Verify if user is able to Pause ,Resume and Cancel the downloading  content in Detail screen", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        // await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
        // await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.subscribed_Username2,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.validateMovieDetailScreen();
        await OnBoardingPage.clickOnMovieDownload();
        await OnBoardingPage.validatePauseResumeAndCancelDownload();
        await OnBoardingPage.clickOnMovieDownload();
        await OnBoardingPage.clickAndVerifyDownloadScreen();
        await OnBoardingPage.validatePauseResumeAndCancelDownload();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });
});
