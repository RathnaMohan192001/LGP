import { th } from "date-fns/locale";
import OnBordingPage from "../../pageobjects/androidTvPages/onBoardingPage";
import PlayerPage from "../../pageobjects/androidTvPages/playerPage";
import AndroidTestData from "../../testdata/AndroidTV.json";
import { remote } from 'webdriverio';

describe("AndroidTV Player sanity Test Cases", async () => {
    it("TC_023. Validate that Movie playback intitiates when click on 'Play' CTA", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.validateLoginScreen();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await OnBordingPage.enterLoginCredential(AndroidTestData.OnBoarding.non_subscribed_Username2, AndroidTestData.OnBoarding.subscribed_Password);
        await browser.pause(18000);
        await OnBordingPage.clickOnPayLaterBtn()
        await browser.pause(5000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['Enter']);
        await browser.pause(5000);
        await OnBordingPage.clickOnMovie();
        await browser.pause(5000);
        await browser.keys(['Enter']);
        await browser.pause(8000);
        await OnBordingPage.clickPlayBtn();
        await browser.pause(2000);
        await OnBordingPage.validateSubcriptionPopup();
        await browser.pressKeyCode(4);
        await browser.pause(5000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.pause(2000);
        await OnBordingPage.validateHomeIcon();
        await OnBordingPage.clickOnLogout();
        await OnBordingPage.validateLoginScreen();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await OnBordingPage.enterLoginCredential(AndroidTestData.OnBoarding.subscribed_Username, AndroidTestData.OnBoarding.subscribed_Password);
        await browser.pause(18000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.pause(2000);
        await OnBordingPage.clickOnMovie();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await browser.pause(8000);
        await OnBordingPage.validatePlayBtn();
        await OnBordingPage.clickPlayBtn();
    });

    it("TC_024. Validate that Series playback intitiates when click on 'Play' CTA", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.validateLoginScreen();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await OnBordingPage.enterLoginCredential(AndroidTestData.OnBoarding.non_subscribed_Username2, AndroidTestData.OnBoarding.subscribed_Password);
        await browser.pause(18000);
        await OnBordingPage.clickOnPayLaterBtn()
        await browser.pause(15000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.pause(2000);
        await OnBordingPage.clickOnSeries();
        await browser.pause(3000);
        await browser.keys(['Enter']);
        await browser.pause(8000);
        await OnBordingPage.clickPlayBtn();
        await browser.pause(2000);
        await OnBordingPage.validateSubcriptionPopup();
        await browser.pressKeyCode(4);
        await browser.pause(10000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.pause(2000);
        await OnBordingPage.validateHomeIcon();
        await OnBordingPage.clickOnLogout();
        await OnBordingPage.validateLoginScreen();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await OnBordingPage.enterLoginCredential(AndroidTestData.OnBoarding.subscribed_Username, AndroidTestData.OnBoarding.subscribed_Password);
        await browser.pause(18000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.pause(2000);
        await OnBordingPage.clickOnSeries();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await browser.pause(8000);
        await OnBordingPage.validatePlayBtn();
        await OnBordingPage.clickPlayBtn();
    });

    it("TC_035. Validate that user is able to select and play contents from Episodes List", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.validateLoginScreen();
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await OnBordingPage.enterLoginCredential(AndroidTestData.OnBoarding.subscribed_Username, AndroidTestData.OnBoarding.subscribed_Password);
        await browser.pause(18000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await browser.pause(2000);
        await OnBordingPage.clickOnSeries();
        await browser.pause(3000);
        await browser.keys(['Enter']);
        await browser.pause(8000);
        await OnBordingPage.clickOnEpisodeIcon();
        await browser.pause(2000);
        // await browser.keys(['ArrowLeft']);
        await PlayerPage.validateSeason();
        await browser.keys(['ArrowRight', 'Enter']);
        await browser.pause(3000);
    });

});
