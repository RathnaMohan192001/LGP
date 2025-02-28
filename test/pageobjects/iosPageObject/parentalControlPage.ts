import OnBoardingPage from "../../pageobjects/iosPageObject/onBoardingPage";

class ParentalControlPage{

    get verifySettingTitle(){
        return $('//XCUIElementTypeNavigationBar[@name="LionsGate.SettingsView"]');
    }

    get clickOnParentalControl(){
        return $('//XCUIElementTypeStaticText[@name="Parental Controls"]');
    }

    get verifyParentalControlTitle(){
        return $('//XCUIElementTypeNavigationBar[@name="LionsGate.ParentalControlsView"]');
    }

    get verifyParentalControl_U(){
        return $('//XCUIElementTypeStaticText[@name="U"]');
    }

    get verifyParentalControl_UA_7(){
        return $('//XCUIElementTypeStaticText[@name="UA-7"]');
    }

    get verifyParentalControl_UA_13(){
        return $('//XCUIElementTypeStaticText[@name="UA-13"]');
    }

    get verifyParentalControl_A(){
        return $('//XCUIElementTypeStaticText[@name="A"]');
    }

    get verifyParentalControlLock_A(){
        return $('(//XCUIElementTypeImage)[4]');
    }

    get verifyParentalControlLock_UA_13(){
        return $('(//XCUIElementTypeImage)[3]');
    }

    get verifyParentalControlLock_UA_7(){
        return $('(//XCUIElementTypeImage)[2]');
    }

    get verifyParentalControlLock_U(){
        return $('(//XCUIElementTypeImage)[1]');
    }

    /**
     * Method to validate Parental Control Options
     */
    async validateParentalControlOptions(password:string){
        await(await OnBoardingPage.clickOnAccountSection).combinedClick("Account");
        if(await(await OnBoardingPage.enterPassword).isDisplayed()){
            await(await OnBoardingPage.enterPassword).setValue(password, "Password Text Field");
            await(await OnBoardingPage.verifyAndClickOnContinueBtn).combinedClick("CONTINUESS");
        }
        else{
            console.log("Password field is not displayed");
        }        await(await this.verifySettingTitle).verifyElementIsDisplayedTrue("Setting");
        await(await this.clickOnParentalControl).combinedClick("Parental Controls");
        await(await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Controls");
        await(await this.verifyParentalControl_U).verifyElementIsDisplayedTrue("Parental Controls U");
        await(await this.verifyParentalControl_UA_7).verifyElementIsDisplayedTrue("Parental Controlsn UA-7");
        await(await this.verifyParentalControl_UA_13).verifyElementIsDisplayedTrue("Parental Controls UA-13");
        await(await this.verifyParentalControl_A).verifyElementIsDisplayedTrue("Parental Controls A");
    }

    /**
     * Method to click on Logout
     */
    async clickOnLogout(){
        if(await(await OnBoardingPage.clickOnBackArrowShowsAndMovies).isDisplayed()){
            await (await OnBoardingPage.clickOnBackArrowShowsAndMovies).combinedClick("Arrow");
        }
        else{
            console.log('Arrow is not displayed');
        }
        await OnBoardingPage.scrollTheScreen();
        await(await OnBoardingPage.clickOnLogout).verifyElementIsDisplayedTrue("Logout");
        await(await OnBoardingPage.clickOnLogout).combinedClick("Logout");
        await browser.pause(1000);
        await(await OnBoardingPage.clickOnYestBtn).combinedClick("YES");
        await browser.pause(2000);
    }

    async validateParentalControl(){
        // if (parentalControlTxt === 'A') {
        //     await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
        //     await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
        //     await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
        //     await (await this.verifyParentalIcon_UA_13).combinedClick("Parental Control UA 13 Icon");
        // }
        // else if (parentalControlTxt === 'UA-13') {
        //     await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
        //     await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
        //     await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
        //     await (await this.verifyParentalIcon_A).combinedClick("Parental Control A Icon");
        // }
        // else if (parentalControlTxt === 'UA-7') {
        //     await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
        //     await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
        //     await (await this.verifyParentalIcon_UA_7).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
        //     await (await this.verifyParentalIcon_A).combinedClick("Parental Control A Icon");
        // }

       var textA= await(await this.verifyParentalControlLock_A).getAttribute("name");
       console.log("text is",textA);
       var textUA_13= await(await this.verifyParentalControlLock_UA_13).getAttribute("name");
       console.log("text is",textUA_13);

       var textUA_7= await(await this.verifyParentalControlLock_UA_7).getAttribute("name");
       console.log("text is",textUA_7);

       var textU= await(await this.verifyParentalControlLock_U).getAttribute("name");
       console.log("text is",textU);

       
       

      

       if(textA==="unlocked"){
        await(await this.verifyParentalControl_UA_13).combinedClick("UA-13");
       }

       else if(textA==="parental_lock"){
        await(await this.verifyParentalControl_A).combinedClick("A");
       }

       else if(textUA_13==="parental_lock"){
        await(await this.verifyParentalControl_A).combinedClick("A");
       }

       else if(textUA_7==="parental_lock"){
        await(await this.verifyParentalControl_A).combinedClick("A");
       }

       else if(textU==="parental_lock"){
        await(await this.verifyParentalControl_A).combinedClick("A");
       }

    }

}
export default new ParentalControlPage();