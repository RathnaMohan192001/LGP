import OnBordingPage from "../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import PlayerPage from "../../pageobjects/androidPageObjects/AndroidSanity/playerPage";


describe("Android OnBoarding sanity Test Cases", async () => {
    it("TC_001. Validate if splash screen is displayed 3 sec on every app launch", async () => {
        await OnBordingPage.verifySplashScreen();
    });

    //only
    it("TC_002. Validate if Intro screen (Banner, CTAs - Get Started ,Login and Explore) is displayed for Guest User", async () => {
        await OnBordingPage.verifyIntroScreen();

    });

    it("TC_003. Validate user is redirected to Home screen for Subscribed user", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyHomeScreenForSubscribedUser("upitest12@yopmail.com");

    });

    it("TC_004. Validate user is redirected to Payment method screen for Non Subscribed user", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await OnBordingPage.verifyHomeScreenForNonSubscribedUser();
    });
});
