import OnBordingPage from "../../../pageobjects/androidPageObjects/AndroidSanity/onBoardingPage";
import AndroidTestData from "../../../testdata/AndroidTestData.json";
import { exec } from 'child_process';

class PlayerPage {

    get clickOnSeasonDropDown() {
        return $('(//android.widget.FrameLayout[@resource-id="com.lionsgateplay.videoapp:id/main_view"])[2]');
    }

    get selectSeasons() {
        return $$('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.lionsgateplay.videoapp:id/rvSeasons"]//android.widget.LinearLayout');
    }

    get selectLastSeason() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.lionsgateplay.videoapp:id/rvSeasons"]//android.widget.LinearLayout[3]');
    }

    get clickOnAccountMenu() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/navigation_bar_item_small_label_view" and @text="ACCOUNT"]');
    }

    get clickOnLogoutTxt() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/logout"]');
    }

    get clickOnYesBtn() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnOk"]');
    }

    get verifySettingTitle() {
        return $('//android.widget.TextView[@text="Settings"]');
    }

    get clickOnAccountSettingOption() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/settingSection" and @text="Account Settings"]');
    }

    get verifyAccountSettingTitle() {
        return $('//android.widget.TextView[@text="Account Settings"]');
    }

    get verifyParentalControlOption() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/settingSection" and @text="Parental Control"]');
    }

    get verifyParentalControlTitle() {
        return $('//android.widget.TextView[@text="Parental Control"]');
    }

    get verifyParentalIcon_A() {
        return $('//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/buttonR"]');
    }

    get verifyParentalIcon_A_Text() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textParentalR"]');
    }

    get verifyParentalIcon_UA_13() {
        return $('//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/button15"]');
    }

    get verifyParentalIcon_UA_13_Text() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textParental15"]');
    }

    get verifyParentalIcon_UA_7() {
        return $('//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/buttonPG"]');
    }

    get verifyParentalIcon_U() {
        return $('//android.widget.ImageView[@resource-id="com.lionsgateplay.videoapp:id/buttonG"]');
    }

    get verifyParentalSettingsUpdatedPopup() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/textTitle"]');
    }

    get verifyParentalSettingsUpdatedPopupYesBtn() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnOk"]');
    }

    get verifyParentalControlText() {
        return $('(//*[@resource-id="com.lionsgateplay.videoapp:id/subSettingSectionText"])[1]');
    }

    get verifywatchList() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/buttonTitle" and @text="WATCHLIST"]');
    }

    get clickOnBuild() {
        return $('(//android.widget.ScrollView/android.view.ViewGroup//android.widget.TextView)[2]')
    }

    get enterBuildPassword() {
        return $('//android.widget.EditText[@resource-id="com.lionsgateplay.videoapp:id/editText"]')
    }

    get clickOnOkBtn() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnOk"]')
    }

    get clickOnEnvList() {
        return $('//android.widget.TextView[@resource-id="android:id/title" and @text="Environment List"]');
    }

    get selectEnv() {
        return $('//android.widget.ListView[@resource-id="android:id/select_dialog_listview"]//android.widget.CheckedTextView[3]');
    }

    get clickOnYes() {
        return $('//android.widget.Button[@resource-id="com.lionsgateplay.videoapp:id/btnOk"]');
    }

    /**
     * Method to validate Seasons and Episode List
     */
    async validateSeasonsAnsEpisodeList() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("TRAILER")');
       // await $('andorid=new UiScrollable(newUiSelector().scrollable(true)).scrollTextView()').click();
        for (let i = 1; i < 2; i++) {
            await (await this.clickOnSeasonDropDown).combinedClick("Season DropDown")
            await (await this.selectSeasons[1]).combinedClick("Season");
            await browser.pause(5000);
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(2,5)');
            await (await OnBordingPage.verifyLastEpisode).verifyElementIsDisplayedTrue("LastEpisode");
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("TRAILER")');
        }

        await (await this.clickOnSeasonDropDown).combinedClick("Season DropDown")
        await (await this.selectLastSeason).combinedClick("Season");
        await browser.pause(5000);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(2,5)');
        await (await OnBordingPage.verifyLastEpisode).verifyElementIsDisplayedTrue("LastEpisode");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("TRAILER")');
    }

    async logoutAsUser() {
        await (await this.clickOnAccountMenu).combinedClick("Account");
        await browser.pause(3000);
        await this.passwordTxtField();
        await (await this.clickOnLogoutTxt).combinedClick("Logout");
        await (await this.clickOnYesBtn).combinedClick("Yes");
        await browser.pause(5000);
        await (await OnBordingPage.loginButton).verifyElementIsDisplayedTrue("Login Button");
    }

    /**
     * Method to validate Parental Control in Account Setting
     */
    async validateParentalControlOption() {
        await (await this.clickOnAccountMenu).combinedClick("Account");
        await this.passwordTxtField();
        await (await this.verifySettingTitle).verifyElementIsDisplayedTrue("Setting");
        await (await this.clickOnAccountSettingOption).combinedClick("Account Setting");
        await (await this.verifyAccountSettingTitle).verifyElementIsDisplayedTrue("Account Setting");
        await (await this.verifyParentalControlOption).verifyElementIsDisplayedTrue("Parental Control");
    }

    async validateParentalControlPage() {
        let parentalControlTxt = await this.verifyParentalControlText.getText();
        console.log("text is", parentalControlTxt);
        await (await this.verifyParentalControlOption).combinedClick("Parental Control");
        if (parentalControlTxt === 'A') {
            await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
            await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
            await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
            await (await this.verifyParentalIcon_UA_13).combinedClick("Parental Control UA 13 Icon");
        }
        else if (parentalControlTxt === 'UA-13') {
            await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
            await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
            await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
            await (await this.verifyParentalIcon_A).combinedClick("Parental Control A Icon");
        }
        else if (parentalControlTxt === 'UA-7') {
            await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
            await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
            await (await this.verifyParentalIcon_UA_7).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
            await (await this.verifyParentalIcon_A).combinedClick("Parental Control A Icon");
        }
    }

    async validateParentalControl() {
        let parentalControlTxt = await this.verifyParentalControlText.getText();
        console.log("text is", parentalControlTxt);
        await (await this.verifyParentalControlOption).combinedClick("Parental Control");
        if (parentalControlTxt === 'A') {
            await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
            await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
            await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
            await (await this.verifyParentalIcon_UA_13).combinedClick("Parental Control UA 13 Icon");
        }
        else if (parentalControlTxt === 'UA-13') {
            await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
            await (await this.verifyParentalIcon_UA_7).verifyElementIsDisplayedTrue("Parental Control UA 7 Icon");
            await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
            await (await this.verifyParentalIcon_UA_7).combinedClick("Parental Control UA 7 Icon");

        }
        else if (parentalControlTxt === 'UA-7') {
            await (await this.verifyParentalControlTitle).verifyElementIsDisplayedTrue("Parental Control");
            await (await this.verifyParentalIcon_UA_7).verifyElementIsDisplayedTrue("Parental Control UA 7 Icon");
            await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
            await (await this.verifyParentalIcon_UA_13).combinedClick("Parental Control UA 13 Icon");

        }
    }

    /**
     * Method to validate Parental Control From A to UA-13
     */
    async validateParentalSettingsUpdatedPopup() {
        // await (await this.verifyParentalIcon_A).verifyElementIsDisplayedTrue("Parental Control A Icon");
        // await (await this.verifyParentalIcon_UA_13).verifyElementIsDisplayedTrue("Parental Control UA 13 Icon");
        // await (await this.verifyParentalIcon_UA_13).combinedClick("Parental Control UA 13 Icon");
        await (await this.verifyParentalSettingsUpdatedPopup).verifyElementIsDisplayedTrue("Parental settings updated");
        await (await this.verifyParentalSettingsUpdatedPopupYesBtn).combinedClick("OK");
        await browser.pause(10000);
        await (await OnBordingPage.clickOnMovie).verifyElementIsDisplayedTrue("Movie");
        await browser.pause(2000);
    }

    async passwordTxtField() {
        if (await (await OnBordingPage.passwordTxtField).isDisplayed()) {
            await (await OnBordingPage.passwordTxtField).setValue(AndroidTestData.OnBoarding.subscribed_Password, "Password text field");
            await (await OnBordingPage.continueBtn).combinedClick("Continue");
        }
        else {
            console.log("Not displayed");
        }
    }

    async validateWatchList() {
        await (await this.verifywatchList).verifyElementIsDisplayedTrue("WatchList");
        await (await this.verifywatchList).combinedClick("WatchList");
    }

    async changeEnv() {
        await browser.pause(5000);
        await (await OnBordingPage.exploreButton).combinedClick("Explore");
        await browser.pause(5000);
        if (await (await OnBordingPage.allowButton).isDisplayed()) {
            await (await OnBordingPage.allowButton).combinedClick("Allow");
        }
        else {
            console.log("Popup not displayed");
        }
        await (await this.clickOnAccountMenu).combinedClick("Account");
        await browser.pause(5000);
        console.log("id", await this.clickOnBuild.getText());
        console.log("ht", (await (await this.clickOnBuild).getSize()).height);

        console.log("wd", (await (await this.clickOnBuild).getSize()).width);
        await browser.keys(['ArrowDown', 'ArrowDown']);


        //await browser.keys(['Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'Enter',]);

        //await browser.execute("adb shell input tap 1040 38 && adb shell input tap 1040 38 && adb shell input tap 1040 38 && adb shell input tap 1040 38 && adb shell input tap 1040 38");
        // Define the coordinates of the build version on the screen
        // const x = 520;
        // const y = 19;

        // // Execute ADB command to tap on the build version
        // exec(`adb shell input tap ${x} ${y} && adb shell input tap ${x} ${y} && adb shell input tap ${x} ${y} && adb shell input tap ${x} ${y} && adb shell input tap ${x} ${y} && adb shell input tap ${x} ${y} && adb shell input tap ${x} ${y}`, (error, stdout, stderr) => {
        //     if (error) {
        //         console.error(`Error executing ADB command: ${error}`);
        //         return;
        //     }
        //     console.log(`Tapped on build version successfully`);
        // })

        exec(`adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER && adb shell input keyevent KEYCODE_ENTER`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing ADB command: ${error}`);
                return;
            }
            console.log(`Tapped on build version successfully`);
        })
        await browser.pause(2000);
        await (await this.enterBuildPassword).combinedClick("Password");
        await (await this.enterBuildPassword).setValue("milkyway", "Password");
        await (await this.clickOnOkBtn).combinedClick("OK");
        await (await this.clickOnEnvList).combinedClick("Environment List");
        await (await this.selectEnv).combinedClick("Dev")
        await (await this.clickOnYes).combinedClick("YES");
        await browser.pause(5000);

    }
}
export default new PlayerPage();
