import { th } from "date-fns/locale";
import OnBordingPage from "../../pageobjects/androidTvPages/onBoardingPage";
import AndroidTestData from "../../testdata/AndroidTV.json";
import { remote } from 'webdriverio';

describe("AndroidTV Detail Screen sanity Test Cases", async () => {
    it("TC_001,TC_002,TC_003,TC_008,TC_011,TC_014,TC_016. Validate Login/Sign Up from Popup on clicking Play icon in Movie detail screen", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.clickOnExploreBtn();
        await browser.pause(5000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.pause(2000);
        await OnBordingPage.validateHomeIcon();
        await OnBordingPage.clickOnMovie();
        // await browser.keys(['Enter']);
        await OnBordingPage.clickOnPlayBtn();
        await OnBordingPage.validateSignupOrLoginPopup();
        await OnBordingPage.clickOnLoginPopupBtn();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await OnBordingPage.enterLoginCredential(AndroidTestData.OnBoarding.subscribed_Username, AndroidTestData.OnBoarding.subscribed_Password);
        await browser.pause(18000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await OnBordingPage.clickOnMovie();
        await browser.keys(['Enter']);
        await browser.pause(3000);
        await OnBordingPage.validatePlayBtn();
        await OnBordingPage.validateDescriptions();
        await OnBordingPage.validateReadMore();
        await browser.pressKeyCode(4);
        await browser.pause(2000);
        await OnBordingPage.validatePlayTrailer();
        // await OnBordingPage.clickOnLogout();
    });

    it("TC_012,TC_013,TC_015,TC_017. Validate Login/Sign Up from Popup on clicking play icon in episode card", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.clickOnExploreBtn();
        await browser.pause(5000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.pause(2000);
        await OnBordingPage.validateHomeIcon();
        await OnBordingPage.clickOnSeries();
        await OnBordingPage.clickOnPlayBtn();
        await OnBordingPage.validateSignupOrLoginPopup();
        await OnBordingPage.clickOnLoginPopupBtn();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await OnBordingPage.enterLoginCredential(AndroidTestData.OnBoarding.subscribed_Username, AndroidTestData.OnBoarding.subscribed_Password);
        await browser.pause(18000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await OnBordingPage.clickOnSeries();
        await browser.pause(3000);
        await browser.keys(['Enter']);
        await browser.pause(8000);
        await OnBordingPage.validatePlayBtn();
        await OnBordingPage.validateDescriptions();
        await OnBordingPage.validateReadMore();
        await browser.pressKeyCode(4);
        await browser.pause(2000);
        await OnBordingPage.validatePlayTrailerForShows();
        // await OnBordingPage.clickOnLogout();
    });

})