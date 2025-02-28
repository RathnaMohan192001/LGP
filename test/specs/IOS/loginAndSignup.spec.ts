import OnBoardingPage from "../../pageobjects/iosPageObject/onBoardingPage";
import AndroidTestData from "../../testdata/AndroidTestData.json";

describe("iOS Login/Signup sanity Test Cases", async () => {
   
    it("TC_007.Validate Login via Password through Mobile number from Onboarding screen", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.enterMobileNumb,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

    it("TC_010. Validate Sign-up through Email from Onboarding screen", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.validateSignup(AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

    it("TC_011. Validate Login/Sign Up from Popup on clicking Play icon in Movie detail screen", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.validateSignupPopupByClickOnMoviePlayIconInDetailScreen();
        await OnBoardingPage.clickOnLoginOption();
        await OnBoardingPage.verifyHomeScreenByClickOnCloseIcon(AndroidTestData.OnBoarding.subscribed_Username,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

    it("TC_012. Validate Login/Sign Up from Popup on clicking play icon in episode card", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.validateSignupPopupByClickOnShowsPlayIconInDetailScreen();
        await OnBoardingPage.clickOnLoginOption();
        await OnBoardingPage.verifyHomeScreenByClickOnCloseIcon(AndroidTestData.OnBoarding.subscribed_Username,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

    it("TC_013,TC_019. Validate that Login/Sign Up from Popup from tapping on Download icon in Movie detail screen", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.validateSignupPopupByClickOnMovieDownloadIconInDetailScreen();
        await OnBoardingPage.clickOnLoginOption();
        await OnBoardingPage.verifyHomeScreenByClickOnCloseIcon(AndroidTestData.OnBoarding.subscribed_Username,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

    //only
    it("TC_014,TC_018. Validate Login/Sign Up from Popup from tapping on Download icon in Show detail screen", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.validateSignupPopupByClickOnShowsDownloadIconInDetailScreen();
        await OnBoardingPage.clickOnLoginOption();
        await OnBoardingPage.verifyHomeScreenByClickOnCloseIcon(AndroidTestData.OnBoarding.subscribed_Username,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

    //only
    it("TC_015. Validate user is able to reset the password from Login page", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.validateResetPassword(AndroidTestData.OnBoarding.non_Subscribed_Username);
    });
});
