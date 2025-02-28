import OnBoardingPage from "../../pageobjects/iosPageObject/onBoardingPage";
import SubscriptionPage from "../../pageobjects/iosPageObject/subscriptionPgae";
import AndroidTestData from "../../testdata/AndroidTestData.json";

describe("iOS View All sanity Test Cases", async () => {
    //only
    it("TC_063,TC_064,TC_65. Validate that 'View All' is available in all configurable carousels in all pages(Home, Movies, Shows)", async () => {
        await OnBoardingPage.verifyMaybeLateBtn();
        await OnBoardingPage.validateViewAll();
    });
});
