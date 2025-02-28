import { th } from "date-fns/locale";
import OnBordingPage from "../../pageobjects/androidTvPages/onBoardingPage";
import AndroidTestData from "../../testdata/AndroidTV.json";
import { remote } from 'webdriverio';

describe("AndroidTV ViewAll sanity Test Cases", async () => {
    it("TC_046,TC_047,TC_048. Validate that 'View All' is available in all configurable carousels in all pages(Home, Movies, Shows)", async () => {
        await OnBordingPage.checkingLogout()
        await browser.pause(3000);
        await OnBordingPage.validateBannerScreen();
        await OnBordingPage.clickOnExploreBtn();
        await browser.pause(10000);
        await OnBordingPage.validationViewAll();
        // await OnBordingPage.clickOnLogout();
    });

});
