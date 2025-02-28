import { th } from "date-fns/locale";
import OnBordingPage from "../../pageobjects/androidTvPages/onBoardingPage";
import AndroidTestData from "../../testdata/AndroidTV.json";
import { remote } from 'webdriverio';

describe("AndroidTV Landing Screen And My List sanity Test Cases", async () => {
    it("TC_018,TC_019. Validate that My List is not displayed for Guest User in Movies details page", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.clickOnExploreBtn();
        await browser.pause(10000);
        await OnBordingPage.clickOnArrowleft()
        // await browser.keys(['ArrowLeft']);
        // await browser.keys(['ArrowLeft']);
        await OnBordingPage.clickOnMovie();
        await browser.keys(['Enter']);
        await browser.pause(5000);
        await OnBordingPage.validateMyList()
        await browser.pressKeyCode(4);
        await browser.pause(5000);
        await OnBordingPage.clickOnArrowleft()
        // await browser.keys(['ArrowLeft']);
        // await browser.keys(['ArrowLeft']);
        await OnBordingPage.clickOnSeries();
        await browser.keys(['Enter']);
        await browser.pause(5000);
        await OnBordingPage.validateShowMyList()
        // await OnBordingPage.clickOnLogout();
    });

    it("TC_040,TC_041,TC_042. Verify that feature carousel unit is available on Home/Shows/Movies screen", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.clickOnExploreBtn();
        await browser.pause(10000);
        await OnBordingPage.validateLandingScreen();
        // await OnBordingPage.clickOnLogout();
    });

    it("TC_043,TC_045. Verify that Continue watching rail is available for logged in user(if user watches the contents partially)", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.validateLoginScreen();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await OnBordingPage.enterLoginCredential(AndroidTestData.OnBoarding.watchList_subscribed_Username, AndroidTestData.OnBoarding.subscribed_Password);
        await browser.pause(10000);
        await OnBordingPage.validationOfContnueWatchingRail();
        await OnBordingPage.clickOnArrowleft()
        // await browser.keys(['ArrowLeft']);
        // await browser.keys(['ArrowLeft']);
        await OnBordingPage.clickOnMovie();
        await browser.keys(['Enter']);
        await browser.pause(3000);
        await OnBordingPage.validatePlayBtn();
        await OnBordingPage.validateAddToMyList();
        await browser.pressKeyCode(4);
        await OnBordingPage.clickOnArrowleft()
        // await browser.keys(['ArrowLeft']);
        // await browser.keys(['ArrowLeft']);
        await OnBordingPage.clickOnSeries();
        await browser.keys(['Enter']);
        await browser.pause(5000);
        await OnBordingPage.validatePlayBtn();
        await OnBordingPage.validateShowAddToMyList()
        // await OnBordingPage.clickOnLogout();
    });

    it("TC_044. Verify that user is able add content to My List as a Non subscribed user ", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.validateLoginScreen();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await OnBordingPage.enterLoginCredential(AndroidTestData.OnBoarding.non_Subscribed_Username, AndroidTestData.OnBoarding.subscribed_Password);
        await browser.pause(10000);
        await OnBordingPage.clickOnPayLaterBtn()
        await browser.pause(8000);
        await OnBordingPage.clickOnArrowleft()
        // await browser.keys(['ArrowLeft']);
        // await browser.keys(['ArrowLeft']);
        await OnBordingPage.clickOnMovie();
        await browser.keys(['Enter']);
        await browser.pause(3000);
        await OnBordingPage.validatePlayBtn();
        await OnBordingPage.validateAddToMyList();
        await browser.pressKeyCode(4);
        await OnBordingPage.clickOnArrowleft()
        // await browser.keys(['ArrowLeft']);
        // await browser.keys(['ArrowLeft']);
        await OnBordingPage.clickOnSeries();
        await browser.keys(['Enter']);
        await browser.pause(5000);
        await OnBordingPage.validatePlayBtn();
        await OnBordingPage.validateShowAddToMyList()
        // await OnBordingPage.clickOnLogout();
    });


});
