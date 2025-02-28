import OnBoardingPage from "../../pageobjects/iosPageObject/onBoardingPage";
import PlayerPage from "../../pageobjects/iosPageObject/playerPage"
import AndroidTestData from "../../testdata/AndroidTestData.json";

describe("iOS Player sanity Test Cases", async () => {
    //only
    it("TC_026. Validate that Movie playback intitiates when click on 'Play' CTA", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.non_Subscribed_Username,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.clickOnMovie()
        await OnBoardingPage.validateSubscriptionPopup();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.subscribed_Username2,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.clickOnMovie()
        await OnBoardingPage.clickOnPlayBtn();
        await PlayerPage.validateContentPlayback();
       // await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });


    it("TC_026. Validate that Series playback intitiates when click on 'Play' CTA", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.non_Subscribed_Username,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.clickOnShows()
        await OnBoardingPage.validateSubscriptionPopup();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.subscribed_Username2,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.clickOnShows()
        await OnBoardingPage.clickOnPlayBtn();
        await PlayerPage.validateContentPlayback();
       // await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
    });

    it("TC_038. Validate that user is able to select and play contents from Episodes List", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.verifyAndclickOnLogout(AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.verifyHomeScreen(AndroidTestData.OnBoarding.subscribed_Username2,AndroidTestData.OnBoarding.subscribed_Password);
        await OnBoardingPage.validateShowsPlayBtn();
    });
});
