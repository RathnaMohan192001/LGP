import OnBoardingPage from "../../pageobjects/iosPageObject/onBoardingPage";
import WebOnboardingpage from "../webSanityPages/onBoardingPage";



class SubscriptionPage{
    get threeMonthsPlan(){
        return $('//XCUIElementTypeTable/XCUIElementTypeCell[2]');
    }

    get threeMonthsTitle(){
        return $('//XCUIElementTypeStaticText[@name="3 Months"]');
    }

    get threeMonthsPriceTitle(){
        return $('(//XCUIElementTypeStaticText[@name="INR 399.00"])[1]');
    }

    get dueTodyTitle(){
        return $('//XCUIElementTypeStaticText[@name="DUE TODAY"]');
    }

    get verifythreeMonthPrice(){
        return $('(//XCUIElementTypeStaticText[@name="INR 399.00"])[2]');
    }

    get billedEveryThreeMonthsTitle(){
        return $('//XCUIElementTypeStaticText[@name="Billed every 3 months"]');
    }

    get threeMonthsPlanButton(){
        return $(`//XCUIElementTypeStaticText[@name="PAY INR 399.00 FOR 3-MONTH'S PLAN"]`);
    }

    get twelvethMonthPlan(){
        return $('//XCUIElementTypeTable/XCUIElementTypeCell[3]')
    }

    get twelvethMonthTitle(){
        return $('//XCUIElementTypeStaticText[@name="12 Months"]');
    }

    get twelvethMonthPriceTitle(){
        return $('(//XCUIElementTypeStaticText[@name="INR 699.00"])[1]')
    }

    get verifyTwelvethMonthPrice(){
        return $('(//XCUIElementTypeStaticText[@name="INR 699.00"])[2]');
    }

    get billedEveryTwelvethMonthsTitle(){
        return $('//XCUIElementTypeStaticText[@name="Billed annually"]');
    }

    get twelvethMonthsPlanButton(){
        return $(`//XCUIElementTypeStaticText[@name="PAY INR 699.00 FOR 12-MONTH'S PLAN"]`);
    }

    async verifyPlanPage(username:string,password:string){
       await(await OnBoardingPage.loginButton).combinedClick("LOG IN");
       await(await OnBoardingPage.verifyLoginWithOTPTitle).verifyElementIsDisplayedTrue("Login With OTP");

       await(await OnBoardingPage.clickOnLoginWthPasswordBtn).combinedClick("LOGIN WITH PASSWORD");

       await(await OnBoardingPage.verifyLoginTitle).verifyElementIsDisplayedTrue("Log in");
            await(await OnBoardingPage.enterEmailAddressOrMobileNumb).setValue(username, "Email Text Field");
            await(await OnBoardingPage.enterPassword).setValue(password, "Password Text Field");
            await(await OnBoardingPage.verifyAndClickOnLoginBtn).verifyElementIsEnabledTrue("LOG IN");
            await(await OnBoardingPage.verifyAndClickOnLoginBtn).combinedClick("LOG IN")
            if(await(await OnBoardingPage.clickOnNotNowBtn).isDisplayed()){
                await(await OnBoardingPage.clickOnNotNowBtn).combinedClick("Not Now");
            }
            else{
                console.log("Not Now Button Is Not Displayed");
            }
            if(await(await OnBoardingPage.clickOnActiveteLionsGatePlayBtn).isDisplayed()){
                await(await OnBoardingPage.clickOnActiveteLionsGatePlayBtn).combinedClick("Active LionsGatePlay");
            }
            else{
                console.log("Active LionsGatePlay  Button Is Not Displayed");
            }
            await(await OnBoardingPage.verifyPlanPageTitle).verifyElementIsDisplayedTrue("Choose Your Plan");
            await browser.pause(2000);
    }

    /**
     * Method to verify Three Months Plan
     */
    async verifythreeMonthPlan(){
        await(await this.threeMonthsPlan).verifyElementIsDisplayedTrue("Select Three Month Plan");
        await(await this.threeMonthsTitle).findElementAndVerifyText("3 Months");
        await(await this.threeMonthsPriceTitle).findElementAndVerifyText("INR 399.00");
        await(await this.dueTodyTitle).verifyElementIsDisplayedTrue("DUE TODAY");
        await(await this.verifythreeMonthPrice).findElementAndVerifyText("INR 399.00");
        await(await this.billedEveryThreeMonthsTitle).findElementAndVerifyText("Billed every 3 months");
        await(await this.threeMonthsPlanButton).findElementAndVerifyText("PAY INR 399.00 FOR 3-MONTH'S PLAN");

    }

      /**
     * Method to verify Twelveth Months Plan
     */
      async verifyTwelvethMonthPlan(){
        await(await this.twelvethMonthPlan).verifyElementIsDisplayedTrue("Select 12 Month Plan");
        await(await this.twelvethMonthPlan).combinedClick("Select 12 Month Plan");
        await(await this.twelvethMonthTitle).findElementAndVerifyText("12 Months");
        await(await this.twelvethMonthPriceTitle).findElementAndVerifyText("INR 699.00");
        await(await this.dueTodyTitle).verifyElementIsDisplayedTrue("DUE TODAY");
        await(await this.verifyTwelvethMonthPrice).findElementAndVerifyText("INR 699.00");
        await(await this.billedEveryTwelvethMonthsTitle).findElementAndVerifyText("Billed annually");
        await(await this.twelvethMonthsPlanButton).findElementAndVerifyText("PAY INR 699.00 FOR 12-MONTH'S PLAN");

    }
}

export default new SubscriptionPage();