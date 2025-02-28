import OnBoardingPage from "../../pageobjects/iosPageObject/onBoardingPage";
import ParentalControl from "../../pageobjects/iosPageObject/parentalControlPage";
import AndroidTestData from "../../testdata/AndroidTestData.json";

describe("iOS Parental Control sanity Test Cases", async () => {
    //only
    it("TC_054,TC_055,TC_056,TC_057,TC_059,TC_060. Validate that parental control menu is displayed under Account setting section", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.subscribed_Username2,AndroidTestData.OnBoarding.subscribed_Password);
        await ParentalControl.validateParentalControlOptions(AndroidTestData.OnBoarding.subscribed_Password);
        await ParentalControl.validateParentalControl();
        await OnBoardingPage.cilickOnHomeIcon();
        await browser.pause(3000);
        await OnBoardingPage.validateMovieDetailScreen();
        await OnBoardingPage.validateWatchList();
        await OnBoardingPage.cilickOnHomeIcon();
        await browser.pause(3000);
        await OnBoardingPage.clickOnMovieDownload();
        await OnBoardingPage.validateDownloading();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

    it("TC_058. Verify that Subscribe popup is displayed post tapping on Play CTA & download icon in  content detail page post applying parental control option  for Non subscribed user", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.non_Subscribed_Username,AndroidTestData.OnBoarding.subscribed_Password);
        await ParentalControl.validateParentalControlOptions(AndroidTestData.OnBoarding.subscribed_Password);
        await ParentalControl.validateParentalControl();
        await OnBoardingPage.cilickOnHomeIcon();
        await browser.pause(3000);
        await OnBoardingPage.validateActiveAccountPopup();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });
});
