import WebOnboardingpage from "../webSanityPages/onBoardingPage";

class OnBoardingPage {

    get splashScreen() {
        return $('//XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther')
    }

    get banner() {
        return $('//XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView[1]/XCUIElementTypeCell/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeImage/XCUIElementTypeOther');
    }

    get verifyGetStartedBtn() {
        return $('//XCUIElementTypeStaticText[@name="GET STARTED"]');
    }

    get loginButton() {
        return $('//XCUIElementTypeStaticText[@name="LOG IN"]');
    }

    get exploreButton() {
        return $('//XCUIElementTypeStaticText[@name="EXPLORE"]');
    }

    get clickOnMaybeLaterBtn() {
        return $('//XCUIElementTypeStaticText[@name="MAYBE LATER"]')
    }

    get verifyLoginWithOTPTitle() {
        return $('//XCUIElementTypeStaticText[@name="Login with OTP"]');
    }

    get clickOnLoginWthPasswordBtn() {
        return $('//XCUIElementTypeStaticText[@name="LOGIN WITH PASSWORD"]');
    }

    get verifyLoginTitle() {
        return $('//XCUIElementTypeStaticText[@name="Log In"]');
    }

    get enterEmailAddressOrMobileNumb() {
        return $('//XCUIElementTypeTextField[@value="johndoe@gmail.com / 91XXXXXXXXXX"]');
    }

    get enterEmailAddressOrMobileNumb1() {
        return $('//XCUIElementTypeTextField');
    }


    get enterPassword() {
        return $('//XCUIElementTypeSecureTextField');
    }

    get verifyAndClickOnLoginBtn() {
        return $('//XCUIElementTypeButton[@name="LOG IN"]');
    }

    get verifyHomeSectionTitle() {
        return $('//XCUIElementTypeStaticText[@name="Home"]');
    }

    get clickOnShowsSection() {
        return $('//XCUIElementTypeStaticText[@name="Shows"]');
    }

    get clickOnMovieSection() {
        return $('//XCUIElementTypeStaticText[@name="Movies"]')
    }

    get clickOnNotNowBtn() {
        return $('//XCUIElementTypeButton[@name="Not Now"]');
    }

    get clickOnSignupLink() {
        return $(`//XCUIElementTypeButton[@name="Don't have an account? SIGN UP"]`)
    }

    get verifyCreateYourAccountTitle() {
        return $('//XCUIElementTypeStaticText[@name="Create your account"]')
    }

    get verifyAndClickOnContinueBtn() {
        return $('//XCUIElementTypeButton[@name="CONTINUE"]');
    }

    get clickOnActiveteLionsGatePlayBtn() {
        return $('//XCUIElementTypeStaticText[@name="ACTIVATE LIONSGATEPLAY"]');
    }

    get verifyPlanPageTitle() {
        return $('//XCUIElementTypeStaticText[@name="Choose your plan"]');
    }

    get clickOnAccountSection() {
        return $('//XCUIElementTypeImage[@name="account_icon_tabbar"]');
    }

    get clickOnLogout() {
        return $('//XCUIElementTypeStaticText[@name="LOG OUT"]');
    }

    get clickOnYestBtn() {
        return $('//XCUIElementTypeButton[@name="YES"]');
    }

    get clickOnOR() {
        return $('//XCUIElementTypeStaticText[@name="OR"]');
    }

    get backArrowIcon() {
        return $('//XCUIElementTypeButton[@name="arrow back small"]');
    }

    get clickOnCloseIcon() {
        return $('//XCUIElementTypeButton[@name="cross white"]');
    }

    get verifyAndClickOnMovieContenet() {
        return $('//XCUIElementTypeTable/XCUIElementTypeCell[3]/XCUIElementTypeCollectionView/XCUIElementTypeCell[1]/XCUIElementTypeOther/XCUIElementTypeImage[1]')
    }

    get clickOnAnyContent() {
        return $('//XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeCell[2]/XCUIElementTypeOther/XCUIElementTypeImage');
    }

    get verifyAndClickOnShowsContenet() {
        return $('//XCUIElementTypeTable/XCUIElementTypeCell[2]/XCUIElementTypeCollectionView/XCUIElementTypeCell[1]/XCUIElementTypeOther/XCUIElementTypeImage[1]')
    }

    get clickOnPlayButton() {
        return $('//XCUIElementTypeButton[@name="PLAY"]');
    }

    get verifyLoginOption() {
        return $('(//XCUIElementTypeButton[@name="LOG IN"])[1]');
    }

    get verifySignupOption() {
        return $('(//XCUIElementTypeButton[@name="SIGN UP"])[1]');
    }

    get clickOnMovieAndShowsDownload() {
        return $('(//XCUIElementTypeButton[@name="DOWNLOAD"])[1]');
    }

    get clickOnShowsDownload() {
        return $('(//XCUIElementTypeButton[@name="DOWNLOAD"])[3]');
    }

    get clickOnForgotPassword() {
        return $('//XCUIElementTypeButton[@name="FORGOT YOUR PASSWORD?"]')
    }

    get verifyPasswordRecoveryTitle() {
        return $('//XCUIElementTypeStaticText[@name="Password Recovery: Email sent"]');
    }

    get verifyMail() {
        return $('//XCUIElementTypeApplication[@name="LIONSGATEPLAY"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeStaticText[2]')
    }

    get trailerPlayIcon() {
        return $('(//XCUIElementTypeButton[@name="play button v2"])[2]');
    }

    get verifyContentTitle() {
        return $('//XCUIElementTypeTable/XCUIElementTypeOther[1]/XCUIElementTypeStaticText[3]');
    }

    get verifyContentDescription() {
        return $('//XCUIElementTypeTable/XCUIElementTypeCell[3]/XCUIElementTypeStaticText');
    }

    get verifyDirectorAndCastAndContentDescriptor() {
        return $('//XCUIElementTypeTable/XCUIElementTypeCell[4]/XCUIElementTypeStaticText');
    }

    get verifyTrailerIcon() {
        return $('//XCUIElementTypeButton[@name="TRAILER"]');
    }

    get verifyMyListIcon() {
        return $('//XCUIElementTypeButton[@name="MY LIST"]');
    }

    get verifySeason1() {
        return $('(//XCUIElementTypeButton[@name="SEASON 1"])[2]')
    }

    get verifyTrailerPlayBtn() {
        return $('//XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton');
    }

    get verifyTrailerBackArrow() {
        return $('//XCUIElementTypeButton[@name="arrow back small"]')
    }

    get reactiveLionsGatePlayPopup() {
        return $('//XCUIElementTypeStaticText[@name="Reactivate LIONSGATEPLAY"]');
    }

    get activeAccountPopup() {
        return $('//XCUIElementTypeStaticText[@name="Activate account"]');
    }

    get clickOnReactiveLGPCloseIcon() {
        return $('//XCUIElementTypeButton[@name="smallCloseWhite"]');
    }

    get verifyAddPaymentDetailsBtn() {
        return $('//XCUIElementTypeStaticText[@name="ADD PAYMENT DETAILS"]');
    }

    get clickOnDownloadIconInBottomBar() {
        return $('//XCUIElementTypeImage[@name="download_icon_tabbar"]');
    }

    get verifyDownloadScreen() {
        return $('//XCUIElementTypeNavigationBar[@name="LionsGate.DownloadsView"]');
    }

    get verifyMoviTitleInDownloadScreen() {
        return $('//XCUIElementTypeStaticText[@name="MOVIES"]');
    }

    get verifyShowTitleInDownloadScreen() {
        return $('//XCUIElementTypeStaticText[@name="SHOWS"]');
    }

    get clickOnDownloadedContent() {
        return $('(//XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeCell/XCUIElementTypeOther/XCUIElementTypeOther)[1]');
    }

    get clickDownloadedContentPlayButton() {
        return $('(//XCUIElementTypeButton[@name="play button v2"])[1]');
    }

    get clickOnHomeIconBottomBar() {
        return $('//XCUIElementTypeImage[@name="home_icon_tabbar"]');
    }

    get verifyPuaseIcon() {
        return $('//XCUIElementTypeButton[@name="player pause"]');
    }

    get clickOnBackArrowPlayer() {
        return $('//XCUIElementTypeButton[@name="player arrow back"]');
    }

    get clickOnPauseDownload() {
        return $('//XCUIElementTypeStaticText[@name="Pause Download"]');
    }

    get clickOnResumeDownload() {
        return $('//XCUIElementTypeStaticText[@name="Resume Download"]');
    }

    get clickOnCancelDownload() {
        return $('//XCUIElementTypeStaticText[@name="Cancel Download"]');
    }

    get clickOnDownloadingIcon() {
        return $('//XCUIElementTypeButton[@name="DOWNLOADING"]');
    }

    get clickOnResumeDownloadInDetailScreen() {
        return $('//XCUIElementTypeButton[@name="RESUME DOWNLOAD"]');
    }

    get clickOnOtherOptions() {
        return $('//XCUIElementTypeStaticText[@name="Other Options…"]');
    }

    get clickOnChooseMyOwnPassword() {
        return $('//XCUIElementTypeImage[@name="square.and.pencil"]');
    }

    get clickOnBackArrowShowsAndMovies() {
        return $('//XCUIElementTypeButton[@name="Back"]');
    }

    get verifyAllSection() {
        return $$('//XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeButton/XCUIElementTypeStaticText');
    }

    get clickViewAllIcon() {
        return $('//XCUIElementTypeButton[@name="Scary Movies "]');
    }

    get homeview() {
        return $('(//XCUIElementTypeTable/XCUIElementTypeCell/XCUIElementTypeButton)[1]');
    }

    get verifyCarousel() {
        return $('(//XCUIElementTypeTable/XCUIElementTypeCell/XCUIElementTypeCollectionView)[1]');
    }

    get verifyContinueWatchingTitle() {
        return $('//XCUIElementTypeStaticText[@name="Continue Watching"]');
    }

    get clickOnContinueWatchingContent() {
        return $('//XCUIElementTypeTable/XCUIElementTypeCell[7]/XCUIElementTypeCollectionView/XCUIElementTypeCell/XCUIElementTypeOther/XCUIElementTypeImage[1]');
    }

    get playAndPause() {
        return $('//XCUIElementTypeButton[@name="player play"]');
    }

    get clickOnMyListIcon() {
        return $('//XCUIElementTypeImage[@name="watchlist_icon_tabbar"]')
    }

    get verifyContentInMylist() {
        return $('(//XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeCollectionView/XCUIElementTypeCell/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeImage)[1]');
    }

    get clickOnShowPlayBtn() {
        return $('(//XCUIElementTypeButton[@name="play button v2"])[5]');
    }


    /**
 * Method to validate Splash Screen
 */
    async verifySplashScreen() {
        await browser.pause(2000);
        await (await this.splashScreen).verifyElementIsDisplayedTrue("Splash Screen");
    }

    /**
     * Method to validate Maybe later Button
     */
    async verifyMaybeLateBtn() {
        await browser.pause(10000);
        if (await (await this.clickOnMaybeLaterBtn).isDisplayed()) {
            await (await this.clickOnMaybeLaterBtn).combinedClick("MAYBE LATER");
        }
        else {
            console.log("MAYBE LATER Button Not Displayed");
        }

    }

    /**
     * Method to validate Intro Screen
     */
    async verifyIntroScreen() {
        await browser.pause(8000);
        await (await this.banner).verifyElementIsDisplayedTrue("Banner");
        await (await this.verifyGetStartedBtn).findElementAndVerifyText("GET STARTED");
        await (await this.loginButton).findElementAndVerifyText("LOG IN");
        await (await this.exploreButton).findElementAndVerifyText("EXPLORE");
    }

    /**
     * Method to verify view All
     */
    async validateViewAll() {
        await (await this.exploreButton).findElementAndVerifyText("EXPLORE");
        await (await this.exploreButton).combinedClick("EXPLORE");
        let tabsSections = await this.verifyAllSection;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).combinedClick(`${tab} Tab`);

            // var num=0;
            while (!await (await this.homeview).isDisplayedInViewport()) {
                await this.scrollTheScreen1();
                if (await (await this.homeview).isDisplayed()) {
                    await (await this.homeview).combinedClick("View All");
                    await browser.pause(3000);
                    await (await this.clickOnAnyContent).combinedClick("Content");
                    await browser.pause(5000);
                    await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
                    break;
                }
                else {
                    console.log("View All Not displayed");
                }
                // num++;
                // if(num==7){
                //     break;
                // }
            }

            if (await (await this.clickOnBackArrowShowsAndMovies).isDisplayed()) {
                await (await this.clickOnBackArrowShowsAndMovies).combinedClick("Arrow");
                await browser.pause(1000);
                await (await this.clickOnBackArrowShowsAndMovies).combinedClick("Arrow");
                if (await (await this.clickOnBackArrowShowsAndMovies).isDisplayed()) {
                    await (await this.clickOnBackArrowShowsAndMovies).combinedClick("Arrow");
                }
                else {
                    console.log('Arrow is not displayed');
                }
            }
            else {
                console.log("Arrow is not displayed");
            }
        }
        await (await this.verifyHomeSectionTitle).verifyElementIsDisplayedTrue("Home");
        await browser.pause(2000);
    }

    /**
     * Method to verify Home Screen As a Subscribed user
     * @param username 
     * @param password 
     */
    async verifyHomeScreen(username: string, password: string) {
        await (await this.loginButton).combinedClick("LOG IN");
        await (await this.verifyLoginWithOTPTitle).verifyElementIsDisplayedTrue("Login With OTP");
        await (await this.clickOnLoginWthPasswordBtn).combinedClick("LOGIN WITH PASSWORD");
        await (await this.verifyLoginTitle).verifyElementIsDisplayedTrue("Log in");
        await (await this.enterEmailAddressOrMobileNumb).setValue(username, "Email Text Field");
        await (await this.enterPassword).setValue(password, "Password Text Field");
        await (await this.verifyAndClickOnLoginBtn).verifyElementIsEnabledTrue("LOG IN");
        await (await this.verifyAndClickOnLoginBtn).combinedClick("LOG IN")
        if (await (await this.clickOnNotNowBtn).isDisplayed()) {
            await (await this.clickOnNotNowBtn).combinedClick("Not Now");
        }
        else {
            console.log("Not Now Button Is Not Displayed");
        }
        if (await (await this.clickOnActiveteLionsGatePlayBtn).isDisplayed()) {
            await (await this.clickOnCloseIcon).combinedClick("Close Icon");
        }
        else {
            console.log("Active LionsGatePlay  Button Is Not Displayed");
        }
        await (await this.verifyHomeSectionTitle).verifyElementIsDisplayedTrue("Home");
        await browser.pause(2000);
    }

    /**
    * Method to verify Home Screen As a Subscribed user
    * @param username 
    * @param password 
    */
    async verifyPlanPage(password: string) {
        await (await this.loginButton).combinedClick("LOG IN");
        await (await this.verifyLoginWithOTPTitle).verifyElementIsDisplayedTrue("Login With OTP");
        await (await this.clickOnOR).combinedClick("OR");
        await (await this.clickOnSignupLink).combinedClick("SignUp");
        await (await this.verifyCreateYourAccountTitle).verifyElementIsDisplayedTrue("Create Your Account");
        await (await this.enterEmailAddressOrMobileNumb).setValue(await WebOnboardingpage.generateRandomString(12) + "@yopmail.com", "Email Text Field");
        await (await this.enterPassword).setValue(password, "Password Text Field");
        await (await this.verifyAndClickOnContinueBtn).verifyElementIsEnabledTrue("CONTINUE");
        await (await this.verifyAndClickOnContinueBtn).combinedClick("CONTINUESS");
        if (await (await this.clickOnNotNowBtn).isDisplayed()) {
            await (await this.clickOnNotNowBtn).combinedClick("Not Now");
        }
        else {
            console.log("Not Now Button Is Not Displayed");
        }
        if (await (await this.clickOnActiveteLionsGatePlayBtn).isDisplayed()) {
            await (await this.clickOnActiveteLionsGatePlayBtn).combinedClick("Active LionsGatePlay");
        }
        else {
            console.log("Active LionsGatePlay  Button Is Not Displayed");
        }
        await (await this.verifyPlanPageTitle).verifyElementIsDisplayedTrue("Choose Your Plan");
        await browser.pause(2000);
    }

    /**
     * Method to click on logout
     */
    async verifyAndclickOnLogout(password: string) {
        await (await this.clickOnAccountSection).combinedClick("Account");
        if (await (await this.enterPassword).isDisplayed()) {
            await (await this.enterPassword).setValue(password, "Password Text Field");
            await (await this.verifyAndClickOnContinueBtn).combinedClick("CONTINUESS");
        }
        else {
            console.log("Password field is not displayed");
        }
        if (await (await this.clickOnBackArrowShowsAndMovies).isDisplayed()) {
            await (await this.clickOnBackArrowShowsAndMovies).combinedClick("Arrow");
        }
        else {
            console.log('Arrow is not displayed');
        }
        await this.scrollTheScreen();
        await (await this.clickOnLogout).verifyElementIsDisplayedTrue("Logout");
        await (await this.clickOnLogout).combinedClick("Logout");
        await browser.pause(1000);
        await (await this.clickOnYestBtn).combinedClick("YES");
        await browser.pause(2000);

    }

    async clickOnBackArrow() {
        await (await this.backArrowIcon).combinedClick("Back Arrow");
    }

    async scrollTheScreen() {
        await browser.actions([
            browser.action('pointer')
                .move(100, 400)
                .down()
                .move(250, 250)
                .up(),
            // browser.action('pointer')
            //     .move(500, 500)
            //     .down()
            //     .move(750, 750)
            //     .up()
        ])
    }

    async scrollTheScreen1() {

        await driver
            .action('pointer')
            .move({ x: 250, y: 600 })
            .down()
            .pause(100)
            .move({ duration: 500, x: 250, y: 300 })
            .up()
            .perform();
    }

    async scrollTheScreen2() {

        await driver
            .action('pointer')
            .move({ x: 250, y: 600 })
            .down()
            .pause(100)
            .move({ duration: 500, x: 250, y: 300 })
            .up()
            .perform();
    }



    /**
     * Method to verify Home Screen By Click On Get Started Button
     * @param username 
     * @param password 
     */
    async validateSignup(password: string) {
        await browser.pause(5000);
        await (await this.enterEmailAddressOrMobileNumb1).setValue(await WebOnboardingpage.generateRandomString(12) + "@yopmail.com", "Email Text Field");
        await (await this.verifyGetStartedBtn).combinedClick("GET STARTED");
        await (await this.verifyCreateYourAccountTitle).verifyElementIsDisplayedTrue("Create Your Account");
        if (await (await this.clickOnOtherOptions).isDisplayed()) {
            await (await this.clickOnOtherOptions).combinedClick("Other Options");
            await (await this.clickOnChooseMyOwnPassword).combinedClick("Choose My Own Password");
        }
        else {
            console.log("Other Options is not displayed");
        }
        await (await this.enterPassword).setValue(password, "Password Text Field");
        await (await this.verifyAndClickOnContinueBtn).verifyElementIsEnabledTrue("CONTINUE");
        await (await this.verifyAndClickOnContinueBtn).combinedClick("CONTINUESS");
        if (await (await this.clickOnNotNowBtn).isDisplayed()) {
            await (await this.clickOnNotNowBtn).combinedClick("Not Now");
        }
        else {
            console.log("Not Now Button Is Not Displayed");
        }
        if (await (await this.clickOnActiveteLionsGatePlayBtn).isDisplayed()) {
            await (await this.clickOnCloseIcon).combinedClick("Close Icon");
        }
        else {
            console.log("Active LionsGatePlay  Button Is Not Displayed");
        }
        await (await this.verifyHomeSectionTitle).verifyElementIsDisplayedTrue("Home");
        await browser.pause(2000);
    }

    /**
     * Method to verify Signup popup By Click on Movie Play Icon In Detail Screen
     */
    async validateSignupPopupByClickOnMoviePlayIconInDetailScreen() {
        await (await this.exploreButton).combinedClick("EXPLORE");
        await (await this.clickOnMovieSection).combinedClick("Movies");
        await (await this.verifyAndClickOnMovieContenet).verifyElementIsDisplayedTrue("Content");
        await (await this.verifyAndClickOnMovieContenet).combinedClick("Content");
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
        await (await this.clickOnPlayButton).combinedClick("PLAY");
        await (await this.verifyLoginOption).verifyElementIsDisplayedTrue("LOG IN");
        await (await this.verifySignupOption).verifyElementIsDisplayedTrue("SIGN UP");
    }


    /**
     * Method to verify Signup popup By Click on Movie Play Icon In Detail Screen
     */
    async validateSignupPopupByClickOnShowsPlayIconInDetailScreen() {
        await (await this.exploreButton).combinedClick("EXPLORE");
        await (await this.clickOnShowsSection).combinedClick("Shows");
        await (await this.verifyAndClickOnShowsContenet).verifyElementIsDisplayedTrue("Content");
        await (await this.verifyAndClickOnShowsContenet).combinedClick("Content");
        await browser.pause(5000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
        await (await this.clickOnPlayButton).combinedClick("PLAY");
        await (await this.verifyLoginOption).verifyElementIsDisplayedTrue("LOG IN");
        await (await this.verifySignupOption).verifyElementIsDisplayedTrue("SIGN UP");
    }

    /**
    * Method to verify Signup popup By Click on Movie Download Icon In Detail Screen
    */
    async validateSignupPopupByClickOnMovieDownloadIconInDetailScreen() {
        await (await this.exploreButton).combinedClick("EXPLORE");
        await (await this.clickOnMovieSection).combinedClick("Movies");
        await (await this.verifyAndClickOnMovieContenet).verifyElementIsDisplayedTrue("Content");
        await (await this.verifyAndClickOnMovieContenet).combinedClick("Content");
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
        await (await this.clickOnMovieAndShowsDownload).combinedClick("Download");
        await (await this.verifyLoginOption).verifyElementIsDisplayedTrue("LOG IN");
        await (await this.verifySignupOption).verifyElementIsDisplayedTrue("SIGN UP");
    }

    /**
    * Method to verify Signup popup By Click on Shows Download Icon In Detail Screen
    */
    async validateSignupPopupByClickOnShowsDownloadIconInDetailScreen() {
        await (await this.exploreButton).combinedClick("EXPLORE");
        await (await this.clickOnShowsSection).combinedClick("Shows");
        await (await this.verifyAndClickOnShowsContenet).verifyElementIsDisplayedTrue("Content");
        await (await this.verifyAndClickOnShowsContenet).combinedClick("Content");
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
        await this.scrollTheScreen();
        await (await this.clickOnShowsDownload).combinedClick("Download");
        await (await this.verifyLoginOption).verifyElementIsDisplayedTrue("LOG IN");
        await (await this.verifySignupOption).verifyElementIsDisplayedTrue("SIGN UP");
    }

    /**
     * Method to click on Login Option
     */
    async clickOnLoginOption() {
        await (await this.verifyLoginOption).combinedClick("LOG IN");
    }

    /**
   * Method to verify Home Screen By Click On Close Icon
   * @param username 
   * @param password 
   */
    async verifyHomeScreenByClickOnCloseIcon(username: string, password: string) {
        await (await this.verifyLoginWithOTPTitle).verifyElementIsDisplayedTrue("Login With OTP");
        await (await this.clickOnLoginWthPasswordBtn).combinedClick("LOGIN WITH PASSWORD");
        await (await this.verifyLoginTitle).verifyElementIsDisplayedTrue("Log in");
        await (await this.enterEmailAddressOrMobileNumb).setValue(username, "Email Text Field");
        await (await this.enterPassword).setValue(password, "Password Text Field");
        await (await this.verifyAndClickOnLoginBtn).verifyElementIsEnabledTrue("LOG IN");
        await (await this.verifyAndClickOnLoginBtn).combinedClick("LOG IN")
        if (await (await this.clickOnNotNowBtn).isDisplayed()) {
            await (await this.clickOnNotNowBtn).combinedClick("Not Now");
        }
        else {
            console.log("Not Now Button Is Not Displayed");
        }
        if (await (await this.clickOnActiveteLionsGatePlayBtn).isDisplayed()) {
            await (await this.clickOnCloseIcon).combinedClick("Close Icon");
        }
        else {
            console.log("Active LionsGatePlay  Button Is Not Displayed");
        }
        await (await this.verifyHomeSectionTitle).verifyElementIsDisplayedTrue("Home");
        await browser.pause(2000);
    }

    /**
     * Method to validate Reset Password
     * @param username 
     */
    async validateResetPassword(username: string) {
        await (await this.loginButton).combinedClick("LOG IN");
        await (await this.verifyLoginWithOTPTitle).verifyElementIsDisplayedTrue("Login With OTP");
        await (await this.clickOnLoginWthPasswordBtn).combinedClick("LOGIN WITH PASSWORD");
        await (await this.verifyLoginTitle).verifyElementIsDisplayedTrue("Log in");
        await (await this.clickOnForgotPassword).combinedClick("FORGOT YOUR PASSWORD?");
        await (await this.enterEmailAddressOrMobileNumb).setValue(username, "Email Text Field");
        await (await this.verifyAndClickOnContinueBtn).verifyElementIsEnabledTrue("CONTINUE");
        await (await this.verifyAndClickOnContinueBtn).combinedClick("CONTINUESS");
        await (await this.verifyPasswordRecoveryTitle).verifyElementIsDisplayedTrue("Password Recovery:Email sent");
        await (await this.verifyMail).findElementAndVerifyTextContains(username);
    }

    /**
     * Method to validate MovieDetail Screen
     */
    async validateMovieDetailScreen() {
        await (await this.clickOnMovieSection).combinedClick("Movies");
        await browser.pause(5000);
        await (await this.verifyAndClickOnMovieContenet).verifyElementIsDisplayedTrue("Content");
        await (await this.verifyAndClickOnMovieContenet).combinedClick("Content");
        await browser.pause(5000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
        await (await this.trailerPlayIcon).verifyElementIsDisplayedTrue("Play Trailer Icon");
        await this.validateTrailerPlayBack()
        await (await this.verifyContentTitle).verifyElementIsDisplayedTrue("Content Title");
        console.log(await (await this.verifyContentTitle).getText());
        await (await this.verifyContentDescription).verifyElementIsDisplayedTrue("Content Description");
        console.log(await (await this.verifyContentDescription).getText());
        await (await this.verifyDirectorAndCastAndContentDescriptor).verifyElementIsDisplayedTrue("Director,Cast and Content Descriptor");
        console.log(await (await this.verifyDirectorAndCastAndContentDescriptor).getText());
        await (await this.verifyTrailerIcon).verifyElementIsDisplayedTrue("Trailer");
        await (await this.verifyMyListIcon).verifyElementIsDisplayedTrue("My List");
        await (await this.clickOnMovieAndShowsDownload).verifyElementIsDisplayedTrue("Download");
    }

    /**
     * Method to click on Movie Download
     */
    async clickOnMovieDownload() {
        await (await this.clickOnMovieAndShowsDownload).combinedClick("Download");
        await browser.pause(2000);
    }

    async validateDownloading() {
        await (await this.clickOnDownloadingIcon).verifyElementIsDisplayedTrue("Downloading");
    }

    /**
    * Method to click on Movie Download
    */
    async clickOnShowDownload() {
        await (await this.clickOnShowsDownload).combinedClick("Download");
        await browser.pause(2000);
    }

    /**
     * Method to validate ShowsDetail Screen
     */
    async validateShowsDetailScreen() {
        await (await this.clickOnShowsSection).combinedClick("Shows");
        await (await this.verifyAndClickOnMovieContenet).verifyElementIsDisplayedTrue("Content");
        await (await this.verifyAndClickOnMovieContenet).combinedClick("Content");
        await browser.pause(9000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
        if (await (await this.trailerPlayIcon).isDisplayed()) {
            await (await this.trailerPlayIcon).verifyElementIsDisplayedTrue("Play Trailer Icon");
        }
        else {
            console.log("Play Trailer Icon is not displayed")
        }
        await (await this.verifyContentTitle).verifyElementIsDisplayedTrue("Content Title");
        console.log(await (await this.verifyContentTitle).getText());
        await (await this.verifyContentDescription).verifyElementIsDisplayedTrue("Content Description");
        console.log(await (await this.verifyContentDescription).getText());
        await (await this.verifyDirectorAndCastAndContentDescriptor).verifyElementIsDisplayedTrue("Director,Cast and Content Descriptor");
        console.log(await (await this.verifyDirectorAndCastAndContentDescriptor).getText());
        await (await this.verifyTrailerIcon).verifyElementIsDisplayedTrue("Trailer");
        await (await this.verifyMyListIcon).verifyElementIsDisplayedTrue("My List");
        await this.scrollTheScreen();
        await this.scrollTheScreen();
        await (await this.clickOnShowsDownload).verifyElementIsDisplayedTrue("Download");
        // await(await this.verifySeason1).verifyElementIsDisplayedTrue("SEASON 1");
        await browser.pause(1000);
    }

    /**
     * Method to validate Shows Play
     */
    async validateShowsPlayBtn() {
        await (await this.clickOnShowsSection).combinedClick("Shows");
        await (await this.verifyAndClickOnMovieContenet).verifyElementIsDisplayedTrue("Content");
        await (await this.verifyAndClickOnMovieContenet).combinedClick("Content");
        await browser.pause(9000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
        await this.scrollTheScreen();
        await this.scrollTheScreen();
        await (await this.clickOnShowPlayBtn).combinedClick("Play");
        await browser.pause(6000);
    }

    /**
     * Method to validate WatchList
     */
    async validateWatchList() {
        await (await this.verifyMyListIcon).combinedClick("My List");
        await this.verifyMaybeLateBtn();
        await (await this.clickOnMyListIcon).combinedClick("MY LIST");
        if (await (await this.verifyContentInMylist).isDisplayed()) {
            await (await this.verifyContentInMylist).verifyElementIsDisplayedTrue("Content");
        }
        else {
            await this.cilickOnHomeIcon();
            await (await this.verifyMyListIcon).combinedClick("My List");
            await this.verifyMaybeLateBtn();
            await (await this.clickOnMyListIcon).combinedClick("MY LIST");
            await browser.pause(5000);
            await (await this.verifyContentInMylist).verifyElementIsDisplayedTrue("Content");
        }
    }

    /**
     * Method to validate Trailer PlayBack
     */
    async validateTrailerPlayBack() {
        await (await this.trailerPlayIcon).combinedClick("Play Trailer Icon");
        await (await this.verifyTrailerPlayBtn).verifyElementIsDisplayedTrue("Play/Pause");
        await (await this.verifyTrailerPlayBtn).moveTo();
        await (await this.verifyTrailerBackArrow).combinedClick("Back Arrow")
        // await(await this.verifyTrailerBackArrow).verifyElementIsDisplayedTrue("Back Arrow");
        // await driver.back();
    }

    /**
     * Method to validate Reactive Lions gate play popup
     */
    async validateReactiveLGPPopup() {
        await (await this.clickOnMovieSection).combinedClick("Movies");
        await browser.pause(5000);
        await (await this.verifyAndClickOnMovieContenet).verifyElementIsDisplayedTrue("Content");
        await (await this.verifyAndClickOnMovieContenet).combinedClick("Content");
        await browser.pause(5000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
        await (await this.clickOnPlayButton).combinedClick("PLAY");
        await (await this.reactiveLionsGatePlayPopup).verifyElementIsDisplayedTrue("Reactive LIONSGATEPLAY");
        await (await this.verifyAddPaymentDetailsBtn).verifyElementIsDisplayedTrue("ADD PAYMENT DETAILS");
        await (await this.clickOnReactiveLGPCloseIcon).combinedClick("Close Icon");
        await (await this.clickOnMovieAndShowsDownload).combinedClick("Download");
        await (await this.reactiveLionsGatePlayPopup).verifyElementIsDisplayedTrue("Reactive LIONSGATEPLAY");
        await (await this.verifyAddPaymentDetailsBtn).verifyElementIsDisplayedTrue("ADD PAYMENT DETAILS");
        await (await this.clickOnReactiveLGPCloseIcon).combinedClick("Close Icon");
    }

    /**
     * Method to validate Active account popup
     */
    async validateActiveAccountPopup() {
        await (await this.clickOnMovieSection).combinedClick("Movies");
        await browser.pause(5000);
        await (await this.verifyAndClickOnMovieContenet).verifyElementIsDisplayedTrue("Content");
        await (await this.verifyAndClickOnMovieContenet).combinedClick("Content");
        await browser.pause(5000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
        await (await this.clickOnPlayButton).combinedClick("PLAY");
        await (await this.activeAccountPopup).verifyElementIsDisplayedTrue("Active account");
        await (await this.verifyAddPaymentDetailsBtn).verifyElementIsDisplayedTrue("ADD PAYMENT DETAILS");
        await (await this.clickOnReactiveLGPCloseIcon).combinedClick("Close Icon");
        await (await this.clickOnMovieAndShowsDownload).combinedClick("Download");
        await (await this.activeAccountPopup).verifyElementIsDisplayedTrue("Active account");
        await (await this.verifyAddPaymentDetailsBtn).verifyElementIsDisplayedTrue("ADD PAYMENT DETAILS");
        await (await this.clickOnReactiveLGPCloseIcon).combinedClick("Close Icon");
    }

    /**
     * Method to validate Download Screen
     */
    async validateDownloadScreen() {
        await (await this.clickOnDownloadIconInBottomBar).combinedClick("Download");
        await (await this.verifyDownloadScreen).verifyElementIsDisplayedTrue("Download Screen");
        await (await this.verifyMoviTitleInDownloadScreen).verifyElementIsDisplayedTrue("Movies");
        await (await this.verifyShowTitleInDownloadScreen).verifyElementIsDisplayedTrue("Shows");
    }

    /**
     * Method to click on Home Icon
     */
    async cilickOnHomeIcon() {
        await (await this.clickOnHomeIconBottomBar).combinedClick("Home Icon");
    }

    /**
     * Method to validate Downloaded Content
     */
    async validateDownloadedContent() {
        await (await this.clickOnDownloadIconInBottomBar).combinedClick("Download");
        await (await this.verifyDownloadScreen).verifyElementIsDisplayedTrue("Download Screen");
        await (await this.clickOnDownloadedContent).combinedClick("Content");
        await (await this.clickDownloadedContentPlayButton).combinedClick("Content Play");
        // await (await this.verifyTrailerPlayBtn).moveTo();
        // await(await this.clickOnBackArrowPlayer).combinedClick("Arrow");
        await browser.pause(5000);
    }

    async clickAndVerifyDownloadScreen() {
        await (await this.clickOnDownloadIconInBottomBar).combinedClick("Download");
        await (await this.verifyDownloadScreen).verifyElementIsDisplayedTrue("Download Screen");
    }

    /**
     * Method to validate Pause, Resume and Cancel the doenloading content in detail sceeen
     */
    async validatePauseResumeAndCancelDownload() {
        await (await this.clickOnDownloadingIcon).combinedClick("Downloading");
        await (await this.clickOnPauseDownload).combinedClick("Pause Download");
        await (await this.clickOnResumeDownloadInDetailScreen).combinedClick("Resume Download")
        await (await this.clickOnResumeDownload).combinedClick("Resume Download");
        await (await this.clickOnDownloadingIcon).combinedClick("Downloading");
        await (await this.clickOnCancelDownload).combinedClick("Cancel Download");
        if (await (await this.clickOnMovieAndShowsDownload).isDisplayed()) {
            await (await this.clickOnMovieAndShowsDownload).verifyElementIsDisplayedTrue("Download");
            await browser.pause(1000);
        }
        else {
            console.log("Not displayed");
        }
    }

    /**
     * Method to validate Movie and Show My List
     */
    async validateMovieAndShowMyListIcon() {
        await (await this.exploreButton).combinedClick("EXPLORE");
        await (await this.clickOnMovieSection).combinedClick("Movies");
        await (await this.verifyAndClickOnMovieContenet).verifyElementIsDisplayedTrue("Content");
        await (await this.verifyAndClickOnMovieContenet).combinedClick("Content");
        await (await this.verifyMyListIcon).verifyElementIsDisplayedFalse("My List");
        await (await this.clickOnBackArrowShowsAndMovies).combinedClick("Arrow");
        await (await this.clickOnBackArrowShowsAndMovies).combinedClick("Arrow");
        await (await this.clickOnShowsSection).combinedClick("Shows");
        await (await this.verifyAndClickOnMovieContenet).verifyElementIsDisplayedTrue("Content");
        await (await this.verifyAndClickOnMovieContenet).combinedClick("Content");
        await (await this.verifyMyListIcon).verifyElementIsDisplayedFalse("My List");
    }

    /**
     * Method to validate Carousel Content Screen
     */
    async validateCarouselContentScreen() {
        await (await this.exploreButton).combinedClick("EXPLORE");
        let tabsSections = await this.verifyAllSection;
        for (let i = 0; i <= tabsSections.length - 1; i++) {
            let tab = await tabsSections[i].getText();
            await (await tabsSections[i]).combinedClick(`${tab} Tab`);
            await browser.pause(1000);
            for (let j = 1; j <= 3; j++) {
                await (await this.verifyCarousel).verifyElementIsEnabledTrue("Carousel");
                await browser.pause(3000);
            }
            await (await this.verifyCarousel).combinedClick("Carousel");
            await browser.pause(4000);
            await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
            await (await this.clickOnBackArrowShowsAndMovies).combinedClick("Arrow");
            if (await (await this.clickOnBackArrowShowsAndMovies).isDisplayed()) {
                await (await this.clickOnBackArrowShowsAndMovies).combinedClick("Arrow");
            }
            else {
                console.log('Arrow is not displayed');
            }
        }
        await (await this.verifyHomeSectionTitle).verifyElementIsDisplayedTrue("Home");
        await browser.pause(2000);
    }

    /**
     * Method to validate Subscription popup
     */
    async validateSubscriptionPopup() {
        await (await this.verifyCarousel).combinedClick("Carousel");
        await browser.pause(9000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
        await (await this.clickOnPlayButton).combinedClick("PLAY");
        await (await this.activeAccountPopup).verifyElementIsDisplayedTrue("Active account");
        await (await this.verifyAddPaymentDetailsBtn).verifyElementIsDisplayedTrue("ADD PAYMENT DETAILS");
        await (await this.clickOnReactiveLGPCloseIcon).combinedClick("Close Icon");
    }

    /**
     * Method to click on play button
     */
    async clickOnPlayBtn() {
        await (await this.verifyCarousel).combinedClick("Carousel");
        await browser.pause(6000);
        await (await this.clickOnPlayButton).verifyElementIsDisplayedTrue("PLAY");
        await (await this.clickOnPlayButton).combinedClick("PLAY");
    }

    /**
     * Method to click on movie section
     */
    async clickOnMovie() {
        await (await this.clickOnMovieSection).combinedClick("Movies");
        await browser.pause(5000);
    }

    /**
    * Method to click on Shows section
    */
    async clickOnShows() {
        await (await this.clickOnShowsSection).combinedClick("Shows");
        await browser.pause(5000);
    }

    /**
     * Method to validate Continue Watching
     */
    async validateContinueWatching() {
        var num = 0;
        while (!await (await this.verifyContinueWatchingTitle).isDisplayedInViewport()) {
            await this.scrollTheScreen1();
            if (await (await this.verifyContinueWatchingTitle).isDisplayed()) {
                await (await this.verifyContinueWatchingTitle).verifyElementIsDisplayedTrue("Content");
                break;
            }
            else {
                console.log("Continue Watching Not displayed");
            }
            num++;
            if (num == 3) {
                break;
            }
        }
    }


}

export default new OnBoardingPage();