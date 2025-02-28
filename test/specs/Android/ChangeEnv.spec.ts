import OnBordingPage from "../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import PlayerPage from "../../pageobjects/androidPageObjects/AndroidSanity/playerPage";


describe("Android Subscriptions sanity Test Cases", async () => {
    //only
    it("TC_016. Validate that plan selection screen with Proper price points ", async () => {
        // await OnBordingPage.verifySplashScreen();
        await PlayerPage.changeEnv();;
    });


});
