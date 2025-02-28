import { th } from "date-fns/locale";
import WebOnboardingpage from "../webSanityPages/onBoardingPage";
import AndroidTestData from "../../testdata/AndroidTestData.json";
import { exec } from 'child_process';

class OnBoardingPage {
    get splashScreen() {
        return $('//android.widget.RelativeLayout')
    }

    get signUpBtn() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button" and @text="SIGN UP"]');
    }

    get loginBtn() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button" and @text="LOG IN"]');
    }

    get exploreBtn() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button" and @text="EXPLORE"]');
    }

    get verifyTitleSelectLoginOpt() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/login_desc_1"]');
    }

    get clickOnLoginURL() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/login_url"]');
    }

    get clickOnContinueBtn() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button"]');
    }

    get verifyLoginTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/titleTxt"]');
    }

    get clickOnLoginWithPassword() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button" and @text="LOGIN WITH PASSWORD"]');
    }

    get enterEmailId() {
        return $('//android.widget.EditText[@resource-id="com.lionsgateplay.videoapp:id/editTextUser"]');
    }

    get enterPassword() {
        return $('//android.widget.EditText[@resource-id="com.lionsgateplay.videoapp:id/editTextPass"]')
    }

    get verifyHomeIcon() {
        return $('(//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/menu_icon"])[2]');
    }

    get clickOnHome() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/menu_text" and @text="Home"]');
    }

    get clickOnSettingIcon() {
        return $('(//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/menu_icon"])[6]');
    }

    get clickOnSetting() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/menu_text" and @text="Settings"]');
    }

    get verifySettingTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/settings_title"]');
    }

    get clickLogout() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/item_title" and @text="Log Out"]');
    }

    get logout() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/item_title" and @text="LOG OUT"]');
    }

    get clickOnYes() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnOk"]');
    }

    get clickOnVoucher() {
        return $('(//android.widget.LinearLayout[@resource-id="com.lionsgateplay.videoapp:id/paymentMethodView"])[2]');
    }

    get clickOnGooglePlay() {
        return $('(//android.widget.LinearLayout[@resource-id="com.lionsgateplay.videoapp:id/paymentMethodView"])[1]');
    }

    get verifyVoucherTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/voucherTitle"]')
    }

    get clickOnShowPassword() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button" and @text="SHOW PASSWORD"]');
    }

    get verifyPlanPageTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/headerTv"]')
    }

    get clikOnMovieSection() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/menu_text" and @text="Movies"]');
    }

    get clickOnSeriesSection() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/menu_text" and @text="Series"]');
    }

    get clickOnPlay() {
        return $('//android.widget.FrameLayout[@resource-id="com.lionsgateplay.videoapp:id/playBegin"]');
    }

    get signUpOrLoginPopUpTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textTitle"]');
    }

    get LoginOrSignUpBtn() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnOk"]');
    }

    get CancelBtn() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnKO"]');
    }

    get verifyPlayBtn() {
        return $('//android.widget.RelativeLayout[@resource-id="com.lionsgateplay.videoapp:id/selected_layout"]');
    }

    get verifyMovieOrShowTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/titleText"]');
    }

    get verifyMetaData() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/metadata"]');
    }

    get verifyDescription() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/description"]');
    }

    get verifyCast() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/infoText"]');
    }

    get verifyContentDescriptor() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/contentDescriptorText"]');
    }

    get verifyPlatTrailerIcon() {
        return $('(//android.widget.FrameLayout[@resource-id="com.lionsgateplay.videoapp:id/main_view"])[3]');
    }

    get verifyReadMoreContent() {
        return $$('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.lionsgateplay.videoapp:id/browse_grid"]/android.widget.LinearLayout');
    }

    fetchReadMoreContentData(index: number) {
        return $(`//androidx.recyclerview.widget.RecyclerView[@resource-id="com.lionsgateplay.videoapp:id/browse_grid"]/android.widget.LinearLayout[${index}]/android.widget.TextView`)
    }

    get verifyMovieMyList() {
        return $('(//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/unselected_image"])[2]');
    }

    get verifyShowMyList() {
        return $('(//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/unselected_image"])[3]')
    }

    get verifyContinueWatchingRail() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/row_header" and @text="Continue Watching"]');
    }

    get verifyContinueWatchingContent() {
        return $('(//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/mainImage"])[4]')
    }

    get verifyAddToMyList() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/button_text"]');
    }

    get clickOnHelp() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/item_title" and @text="Help"]');
    }

    get clickOnVersionNum() {
        return $('//android.widget.RelativeLayout[@resource-id="com.lionsgateplay.videoapp:id/help_button"]//android.widget.TextView');
    }

    get verifyViewAll() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/cta"]');
    }

    get verifyTitle() {
        return $('(//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/title_tv"])[1]');
    }



    /**
     * Method to validate Banner Screen
     */
    async validateBannerScreen() {
        await (await this.splashScreen).verifyElementIsDisplayedTrue('SplashScreen');
        await browser.pause(20000);
        await (await this.signUpBtn).verifyElementIsDisplayedTrue("SIGN UP");
        await browser.pause(20000);
        await (await this.loginBtn).verifyElementIsDisplayedTrue("LOG IN");
        await browser.pause(6000);
        await (await this.exploreBtn).verifyElementIsDisplayedTrue("EXPLORE");
        await browser.pause(6000);
    }

    /**
    * Method to validate Login Title
    */
    async validateLoginScreen() {
        await (await this.loginBtn).combinedClick("LOG IN");
        await (await this.verifyTitleSelectLoginOpt).verifyElementIsDisplayedTrue("Follow the steps below on your computer, mobile phone or tablet:")
        // await (await this.clickOnLoginURL).combinedClick("Login Url");
        await (await this.clickOnContinueBtn).combinedClick('Continue On TV');
        await (await this.verifyLoginTitle).verifyElementIsDisplayedTrue('Login In to your account');
    }

    /**
     * Method to enter Login Credential
     * @param username 
     * @param password 
     */
    async enterLoginCredential(username: string, password: string) {
        await (await this.clickOnLoginWithPassword).combinedClick('LOGIN WITH PASSWORD');
        await (await this.enterEmailId).setValue(username, "Email Text Field");
        await (await this.enterPassword).setValue(password, "Password Text Field");
        await (await this.loginBtn).combinedClick("LOG IN");
        await browser.pause(50000);
    }

    /**
     * Method to validate Signup
     */
    async validateSignupThroughMail() {
        await (await this.signUpBtn).combinedClick("SIGN UP");
        await (await this.verifyLoginTitle).verifyElementIsDisplayedTrue('Create your account');
        await (await this.enterEmailId).setValue(await WebOnboardingpage.generateRandomString(12) + "@yopmail.com", "Email Text Field");
        await (await this.enterPassword).setValue(AndroidTestData.OnBoarding.subscribed_Password, "Password Text Field");
        await (await this.clickOnShowPassword).combinedClick("SHOW PASSWORS");
        // we use the `pressKeyCode` method with the keycode `4` to simulate the back arrow action on the remote
        await browser.pressKeyCode(4);
        await (await this.signUpBtn).combinedClick("SIGN UP");
        await browser.pause(18000);
        await (await this.verifyPlanPageTitle).verifyElementIsDisplayedTrue('Choose your plan');
        await browser.pause(2000);
    }

    /**
     * Method to click on Pay later button
     */
    async clickOnPayLaterBtn() {
        await (await this.verifyPlanPageTitle).verifyElementIsDisplayedTrue('Choose your plan');
        await (await this.clickOnContinueBtn).combinedClick('PAY LATER');
    }

    async clickOnVoucherPlan() {
        await (await this.verifyPlanPageTitle).verifyElementIsDisplayedTrue('Choose your plan');
        await (await this.clickOnVoucher).combinedClick('VOUCHER');
        await browser.keys(['Enter']);
        await browser.pause(3000);
        await (await this.verifyVoucherTitle).verifyElementIsDisplayedTrue("Redeem your voucher")
        await browser.pause(2000);
    }

    /**
     * Method to verify Home Icon
     */
    async validateHomeIcon() {
        await (await this.verifyHomeIcon).verifyElementIsDisplayedTrue("Home");
        await browser.pause(2000);
    }

    /**
     * Method to click on logout
     */
    async clickOnLogout() {
        await (await this.clickOnSetting).combinedClick("Settings");
        await browser.keys(['Enter']);
        await browser.pause(3000);
        await (await this.verifySettingTitle).verifyElementIsDisplayedTrue("Settings");
        await (await this.clickLogout).combinedClick("Logout");
        await (await this.logout).combinedClick("LOG OUT");
        await (await this.clickOnYes).combinedClick("YES");
    }

    async checkingLogout() {
        if (await (await this.clickOnContinueBtn).isDisplayed()) {
            await this.clickOnPayLaterBtn();
            await browser.keys(['ArrowLeft']);
            await browser.keys(['ArrowLeft']);
            await this.clickOnLogout();
            await browser.pause(3000);
        }
        else {
            console.log('Pay Later is not displayed');
        }
    }

    async clickOnExploreBtn() {
        await (await this.exploreBtn).combinedClick("EXPLORE");
    }

    async clickOnMovie() {
        //await (await this.clikOnMovieSection).isDisplayedInViewport();
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await (await this.clikOnMovieSection).combinedClick("Movies");
        await browser.pause(2000);
        await browser.keys(['Enter']);
        await browser.pause(10000);
        // await browser.keys(['ArrowRight']);
    }

    async clickOnSeries() {
        await (await this.clickOnSeriesSection).combinedClick("Series");
        await browser.pause(8000);
        await browser.keys(['Enter']);
        await browser.pause(10000);
        await browser.keys(['ArrowRight']);
    }

    async clickOnArrowleft() {
        while (!await (await this.clikOnMovieSection).isDisplayedInViewport()) {
            await browser.keys(['ArrowLeft'])
            if (await (await this.clikOnMovieSection).isDisplayed()) {
                await (await this.clikOnMovieSection).verifyElementIsDisplayedTrue("Movie");
                break;
            }
        }
    }

    async clickOnPlayBtn() {
        await (await this.clickOnPlay).combinedClick("Play");
    }

    async validateSignupOrLoginPopup() {
        await (await this.signUpOrLoginPopUpTitle).verifyElementIsDisplayedTrue("Sign Up or Log In");
        await (await this.LoginOrSignUpBtn).verifyElementIsDisplayedTrue("LOG IN / SIGN UP");
        await (await this.CancelBtn).verifyElementIsDisplayedTrue("CANCEL");
    }

    async validateSubcriptionPopup() {
        await (await this.signUpOrLoginPopUpTitle).verifyElementIsDisplayedTrue("Subscriptions");
        await (await this.LoginOrSignUpBtn).verifyElementIsDisplayedTrue("SUBSCRIPTIONS");
        await (await this.CancelBtn).verifyElementIsDisplayedTrue("CANCEL");
        await (await this.CancelBtn).combinedClick("CANCEL");
    }

    async clickOnLoginPopupBtn() {
        await (await this.LoginOrSignUpBtn).combinedClick("LOG IN / SIGN UP");
        await browser.pause(3000);
        await (await this.clickOnContinueBtn).combinedClick('Continue On TV');
        await (await this.verifyLoginTitle).verifyElementIsDisplayedTrue('Login In to your account');
    }

    async validatePlayBtn() {
        await (await this.verifyPlayBtn).verifyElementIsDisplayedTrue("PLAY");
    }

    async clickPlayBtn() {
        await (await this.verifyPlayBtn).combinedClick("PLAY");
        await browser.pause(3000);
    }

    async validateDescriptions() {
        await (await this.verifyMovieOrShowTitle).verifyElementIsDisplayedTrue("Title");
        console.log("Title is:", await (await this.verifyMovieOrShowTitle).getText());
        if (await (await this.verifyMetaData).isDisplayed()) {
            await (await this.verifyMetaData).verifyElementIsDisplayedTrue("MetaData");
            console.log("MetaData is:", await (await this.verifyMetaData).getText());
        }
        else {
            console.log("MetaData is not displayed");

        }
        if (await (await this.verifyDescription).isDisplayed()) {
            await (await this.verifyDescription).verifyElementIsDisplayedTrue("Description");
            console.log("Description is:", await (await this.verifyDescription).getText());
        }
        else {
            console.log("Description is not displayed");
        }
        if (await (await this.verifyCast).isDisplayed()) {
            await (await this.verifyCast).verifyElementIsDisplayedTrue("Cast");
            console.log("Cast is:", await (await this.verifyCast).getText());
        }
        else {
            console.log("Cast is not displayed");
        }
        if (await (await this.verifyContentDescriptor).isDisplayed()) {
            await (await this.verifyContentDescriptor).verifyElementIsDisplayedTrue("Content Descriptor");
            console.log("Content Descriptor is:", await (await this.verifyContentDescriptor).getText());
        }
        else {
            console.log("Content Descriptor is not displayed");
        }
    }

    async validateReadMore() {
        await (await this.clickOnContinueBtn).verifyElementIsDisplayedTrue("READ MORE");
        await (await this.clickOnContinueBtn).combinedClick("READ MORE");
        await browser.keys(['Enter']);
        for (let i = 0; i <= await this.verifyReadMoreContent.length - 1; i++) {
            await (await this.verifyReadMoreContent[i]).verifyElementIsDisplayedTrue(`${i + 1}`);
            for (let j = 0; j <= 1; j++) {
                let data = await this.fetchReadMoreContentData(j + 1).getText();
                console.log(data);
            }
            await browser.keys(['ArrowDown']);
        }
    }

    async validatePlayTrailer() {
        await (await this.verifyMovieMyList).verifyElementIsDisplayedTrue("MY LIST");
        await (await this.verifyPlatTrailerIcon).verifyElementIsDisplayedTrue("PLAY TRAILER");
        await (await this.verifyPlatTrailerIcon).combinedClick("PLAY TRAILER");
    }

    async validatePlayTrailerForShows() {
        await (await this.verifyShowMyList).verifyElementIsDisplayedTrue("MY LIST");
        await (await this.verifyPlatTrailerIcon).verifyElementIsDisplayedTrue("EPISODES");
        await (await this.verifyMovieMyList).verifyElementIsDisplayedTrue("PLAY TRAILER");
        await (await this.verifyMovieMyList).combinedClick("PLAY TRAILER");
    }

    async validateMyList() {
        await (await this.verifyMovieMyList).verifyElementIsDisplayedFalse("MY LIST");
        await browser.pause(2000);
    }

    async validateShowMyList() {
        await (await this.verifyShowMyList).verifyElementIsDisplayedFalse("MY LIST");
        await browser.pause(2000);
    }

    async clickOnEpisodeIcon() {
        await (await this.verifyPlatTrailerIcon).verifyElementIsDisplayedTrue("EPISODES");
        await (await this.verifyPlatTrailerIcon).combinedClick("EPISODES");
    }

    async goThroughCarousel() {
        for (let i = 1; i < 4; i++) {
            await browser.keys(['ArrowRight']);
            await browser.pause(1000);
        }

        for (let i = 1; i < 4; i++) {
            await browser.keys(['ArrowLeft']);
            await browser.pause(1000);
        }
        await browser.keys(['Enter']);
        await browser.pause(5000);
        await (await this.verifyPlayBtn).verifyElementIsDisplayedTrue("PLAY");
        await browser.pressKeyCode(4);
    }

    async validateLandingScreen() {
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await (await this.clickOnHome).verifyElementIsDisplayedTrue("Home");
        await (await this.clickOnHome).combinedClick("Home");
        await browser.keys(['Enter']);
        await browser.pause(10000);
        await this.goThroughCarousel();
        await browser.pressKeyCode(4);
        await browser.pause(5000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await this.clickOnMovie();
        await this.goThroughCarousel();
        await browser.pressKeyCode(4);
        await browser.pause(5000);
        await browser.keys(['ArrowLeft']);
        await browser.keys(['ArrowLeft']);
        await this.clickOnSeries();
        await this.goThroughCarousel();
    }

    async viewAll() {
        var num = 0;
        while (!await (await this.verifyViewAll).isDisplayedInViewport()) {
            await browser.keys(['ArrowDown'])
            for (let i = 1; i <= 24; i++) {
                await browser.keys(['ArrowRight'])
            }
            if (await (await this.verifyViewAll).isDisplayed()) {
                await (await this.verifyViewAll).verifyElementIsDisplayedTrue("View All");
                await (await this.verifyViewAll).combinedClick("View All");
                await browser.keys(['Enter']);
                await browser.pause(3000);
                await (await this.verifyTitle).verifyElementIsDisplayedTrue(await (await this.verifyTitle).getText());
                await browser.keys(['Enter']);
                await browser.pause(2000);
                await (await this.verifyPlayBtn).verifyElementIsDisplayedTrue("PLAY");
                await browser.pressKeyCode(4);
                await browser.pressKeyCode(4);
                await browser.pause(2000);
                await browser.keys(['ArrowDown'])
                break;
            }
            else {
                console.log("View All Not Displayed")
            }

            num++;
            if (num == 3) {
                await browser.keys(['ArrowDown'])
                break;
            }
        }
    }

    async validationViewAll() {
        await this.clickOnArrowleft()
        await (await this.clickOnHome).verifyElementIsDisplayedTrue("Home");
        await (await this.clickOnHome).combinedClick("Home");
        await browser.keys(['Enter']);
        await browser.pause(10000);
        await this.viewAll();
        await this.clickOnArrowleft()
        await this.clickOnMovie();
        await this.viewAll();
        await this.clickOnArrowleft();
        await this.clickOnSeries();
        await this.viewAll();
        // var num = 0;
        // while (!await (await this.verifyViewAll).isDisplayedInViewport()) {
        //     await browser.keys(['ArrowDown'])
        //     for (let i = 1; i <= 25; i++) {
        //         await browser.keys(['ArrowRight'])
        //     }
        //     if (await (await this.verifyViewAll).isDisplayed()) {
        //         await (await this.verifyViewAll).verifyElementIsDisplayedTrue("View All");
        //         // await browser.keys(['ArrowDown'])
        //         break;
        //     }
        //     else {
        //         console.log("View All Not Displayed")
        //     }

        //     num++;
        //     if (num == 3) {
        //         break;
        //     }
        // }
    }

    async validationOfContnueWatchingRail() {
        var num = 0;
        while (!await (await this.verifyContinueWatchingRail).isDisplayedInViewport()) {
            await browser.keys(['ArrowDown']);
            if (await (await this.verifyContinueWatchingRail).isDisplayed()) {
                await (await this.verifyContinueWatchingRail).verifyElementIsDisplayedTrue("Continue Watching");
                await (await this.verifyContinueWatchingContent).verifyElementIsDisplayedTrue("Content");
                break;
            }
            else {
                console.log("Continue Watching is not displayed");
            }
            num++;
            if (num == 3) {
                break;
            }
        }
    }

    async validateAddToMyList() {
        await browser.keys(['ArrowRight']);
        await browser.keys(['ArrowRight']);
        let myList = await (await this.verifyAddToMyList).getText();
        console.log(myList);
        if (myList === "ADD TO MY LIST") {
            await (await this.verifyAddToMyList).verifyElementIsDisplayedTrue("ADD TO MY LIST");
            await (await this.verifyAddToMyList).combinedClick("ADD TO MY LIST");
            await browser.pause(2000);
            await browser.keys(['ArrowRight']);
            await browser.keys(['ArrowRight']);
            await (await this.verifyAddToMyList).findElementAndVerifyText("REMOVE FROM MY LIST");
        }
        else if (myList === "REMOVE FROM MY LIST") {
            await (await this.verifyAddToMyList).combinedClick("REMOVE FROM MY LIST");
            await browser.pause(2000);
            await browser.keys(['ArrowRight']);
            await browser.keys(['ArrowRight']);
            await (await this.verifyAddToMyList).findElementAndVerifyText("ADD TO MY LIST");
            await (await this.verifyAddToMyList).combinedClick("ADD TO MY LIST");
            await browser.pause(2000);
            await browser.keys(['ArrowRight']);
            await browser.keys(['ArrowRight']);
            await (await this.verifyAddToMyList).findElementAndVerifyText("REMOVE FROM MY LIST");
        }
    }

    async validateShowAddToMyList() {
        await browser.keys(['ArrowRight']);
        await browser.keys(['ArrowRight']);
        await browser.keys(['ArrowRight']);
        let myList = await (await this.verifyAddToMyList).getText();
        console.log(myList);
        if (myList === "ADD TO MY LIST") {
            await (await this.verifyAddToMyList).verifyElementIsDisplayedTrue("ADD TO MY LIST");
            await (await this.verifyAddToMyList).combinedClick("ADD TO MY LIST");
            await browser.pause(2000);
            await browser.keys(['ArrowRight']);
            await browser.keys(['ArrowRight']);
            await browser.keys(['ArrowRight']);
            await (await this.verifyAddToMyList).findElementAndVerifyText("REMOVE FROM MY LIST");
        }
        else if (myList === "REMOVE FROM MY LIST") {
            await (await this.verifyAddToMyList).combinedClick("REMOVE FROM MY LIST");
            await browser.pause(2000);
            await browser.keys(['ArrowRight']);
            await browser.keys(['ArrowRight']);
            await browser.keys(['ArrowRight']);
            await (await this.verifyAddToMyList).findElementAndVerifyText("ADD TO MY LIST");
            await (await this.verifyAddToMyList).combinedClick("ADD TO MY LIST");
            await browser.pause(2000);
            await browser.keys(['ArrowRight']);
            await browser.keys(['ArrowRight']);
            await browser.keys(['ArrowRight']);
            await (await this.verifyAddToMyList).findElementAndVerifyText("REMOVE FROM MY LIST");
        }
    }

    async switchEnv() {
        await (await this.clickOnSetting).combinedClick("Setting");
        await browser.keys(['Enter']);
        await browser.pause(3000);
        await (await this.verifySettingTitle).verifyElementIsDisplayedTrue("Settings");
        await (await this.clickOnHelp).verifyElementIsDisplayedTrue("Help");

        await browser.keys(['ArrowRight']);
        await browser.keys(['ArrowRight']);
        // await browser.keys(['ArrowRight']);
        await browser.pause(3000);

        console.log("id", await this.clickOnVersionNum.getText());
        console.log("ht", (await (await this.clickOnVersionNum).getSize()).height);

        console.log("wd", (await (await this.clickOnVersionNum).getSize()).width);
        const centerX = 866;
        const centerY = 533;
        // await browser.keys(['Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter']);
        // await browser.keys(['KEYCODE_SPACE', 'KEYCODE_SPACE', 'KEYCODE_SPACE', 'KEYCODE_SPACE', 'KEYCODE_SPACE', 'KEYCODE_SPACE', 'KEYCODE_SPACE', 'KEYCODE_SPACE','KEYCODE_SPACE']);
        // Execute ADB command to tap on the build version
        // exec(`adb shell input tap ${centerX} ${centerY} && adb shell input tap ${centerX} ${centerY} && adb shell input tap ${centerX} ${centerY} && adb shell input tap ${centerX} ${centerY} && adb shell input tap ${centerX} ${centerY} && adb shell input tap ${centerX} ${centerY} && adb shell input tap ${centerX} ${centerY} && adb shell input tap ${centerX} ${centerY} && adb shell input tap ${centerX} ${centerY}`, (error, stdout, stderr) => {
        //     if (error) {
        //         console.error(`Error executing ADB command: ${error}`);
        //         return;
        //     }
        //     console.log(`Tapped on build version successfully`);
        // })

        //KEYCODE_DPAD_CENTER

        //await browser.keys(['KEYCODE_DPAD_CENTER', 'KEYCODE_DPAD_CENTER', 'KEYCODE_DPAD_CENTER', 'KEYCODE_DPAD_CENTER', 'KEYCODE_DPAD_CENTER', 'KEYCODE_DPAD_CENTER', 'KEYCODE_DPAD_CENTER', 'KEYCODE_DPAD_CENTER']);

        // await driver.touchAction({
        //     action: 'tap', x: 899, y: 527
        // });

        // exec(`adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER && adb shell input keyevent KEYCODE_DPAD_CENTER`, (error, stdout, stderr) => {
        //     if (error) {
        //         console.error(`Error executing ADB command: ${error}`);
        //         return;
        //     }
        //     console.log(`Tapped on build version successfully`);
        // })


        // exec(`adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE`, (error, stdout, stderr) => {
        //     if (error) {
        //         console.error(`Error executing ADB command: ${error}`);
        //         return;
        //     }
        //     console.log(`Tapped on build version successfully`);
        // })

        exec(`adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing ADB command: ${error}`);
                return;
            }
            console.log(`Tapped on build version successfully`);
        })

        // exec(`adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE && adb shell input keyevent KEYCODE_SPACE`, (error, stdout, stderr) => {
        //     if (error) {
        //         console.error(`Error executing ADB command: ${error}`);
        //         return;
        //     }
        //     console.log(`Tapped on build version successfully`);
        // })

        //await this.clickOnVersionNum.click();
        // await browser.execute("adb shell input tap 421 22 && adb shell input tap 421 22 && adb shell input tap 421 22 && adb shell input tap 421 22 && adb shell input tap 421 22 && adb shell input tap 421 22 && adb shell input tap 421 22");
        //await browser.execute("adb shell input keyevent KEYCODE_VOLUME_UP && adb shell input keyevent KEYCODE_VOLUME_DOWN && adb shell input keyevent KEYCODE_VOLUME_UP && adb shell input keyevent KEYCODE_VOLUME_DOWN && adb shell input keyevent KEYCODE_VOLUME_UP && adb shell input keyevent KEYCODE_VOLUME_DOWN && adb shell input keyevent KEYCODE_VOLUME_UP && adb shell input keyevent KEYCODE_VOLUME_DOWN && adb shell input keyevent KEYCODE_VOLUME_UP");
        //await browser.execute("adb shell input keyevent KEYCODE_VOLUME_UP KEYCODE_VOLUME_UP KEYCODE_VOLUME_UP KEYCODE_VOLUME_UP KEYCODE_VOLUME_UP KEYCODE_VOLUME_UP KEYCODE_VOLUME_UP");
        // for (let i = 1; i <= 7; i++) {
        //     await this.clickOnVersionNum.click();
        // }

        // const e = await $('//android.widget.RelativeLayout[@resource-id="com.lionsgateplay.videoapp:id/help_button"]//android.widget.TextView');
        // await driver.executeScript('mobile: tapWithNumberOfTaps', [{
        //     elementId: e.elementId,
        //     numberOfTaps: 7,
        //     numberOfTouches: 1
        // }]);

        // const numberOfTaps = 10; // Change this to your desired number
        // // const centerX = 866;
        // // const centerY = 533;
        // // Perform the taps
        // for (let i = 0; i < numberOfTaps; i++) {
        //     await browser.performActions([
        //         {
        //             type: 'pointer',
        //             id: `finger${i}`,
        //             parameters: { pointerType: 'touch' },
        //             actions: [
        //                 { type: 'pointerMove', duration: 0, x: centerX, y: centerY },
        //                 { type: 'pointerDown', button: 0 },
        //                 { type: 'pointerUp', button: 0 },
        //             ],
        //         }
        //     ]);
        //     // Optional: Add a short pause between taps
        //     await browser.pause(50); // Adjust the pause as needed
        // }
        // // Clean up actions
        // await browser.releaseActions();
        // await browser.pause(5000);

    }
}


export default new OnBoardingPage();
