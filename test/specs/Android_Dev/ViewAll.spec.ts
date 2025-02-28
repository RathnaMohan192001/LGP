import OnBordingPage from "../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import ViewAllPage from "../../pageobjects/androidPageObjects/AndroidSanity/viewAllPage";
import PlayerPage from "../../pageobjects/androidPageObjects/AndroidSanity/playerPage";


describe("Android ViewAll sanity Test Cases", async () => {
    it("TC_068. Validate that 'View All' is available in all configurable carousels in all pages(Home, Movies, Shows)", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await PlayerPage.changeEnv();
        await OnBordingPage.validateHomePageByClickingOnExplore();
        await OnBordingPage.validateViewAllIcon();
    });

    it("TC_069. Validate that 'View All' with the arrow should be clickable", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await PlayerPage.changeEnv();
        await OnBordingPage.validateHomePageByClickingOnExplore();
        await OnBordingPage.clickOnViewAllIcon();
    });

    it("TC_070. Verify that user is redirected to its content detail page on clicking on any content thumbnail in Grid view page", async () => {
        // await OnBordingPage.verifySplashScreen();
        // await OnBordingPage.verifyIntroScreen();
        await PlayerPage.changeEnv();
        await OnBordingPage.validateHomePageByClickingOnExplore();
        await OnBordingPage.validateCintentDetailsPage();
    });

});
