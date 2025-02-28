import { th } from "date-fns/locale";
import OnBordingPage from "../../pageobjects/androidTvPages/onBoardingPage";
import AndroidTestData from "../../testdata/AndroidTestData.json";
import { remote } from 'webdriverio';

// describe("AndroidTV Detail Screen sanity Test Cases", async () => {
//     it("TC_001,TC_002,TC_003,TC_008,TC_011. Validate Login/Sign Up from Popup on clicking Play icon in Movie detail screen", async () => {
//         // ADB shell command
//         const adc = 'appium --allow-insecure=adb_shell'

//         const adbCommand = 'adb shell am start -a android.intent.action.VIEW -d https://lionsgateplay.com/watcho?user_id=918652575321&lgi_partner=watcho&sp_r=movies/166191144223';

//         // Execute the command
//         const result = await driver.execute('mobile: shell', {
//             command: adbCommand
//         });
//         await browser.pause(30000);
//     });
// })

describe('ADB Command Test', () => {

    it('should execute ADB command', async () => {
        browser.addCommand('executeAdbCommand', async (command: string, args: string[]) => {
            return await browser.execute('mobile: shell', {
                //command: 'am start -a android.intent.action.VIEW -d "https://lionsgateplay.com/en/series"',
                command: 'adb shell am start -a android.intent.action.VIEW -d "https://lionsgateplay.com/watcho?user_id=918512068733&lgi_partner=watcho&sp_r=movies/212225064348"',
                args: args
            });
        });
        await browser.pause(20000);
        // const command = 'am start -a android.intent.action.VIEW -d "https://lionsgateplay.com/watcho?user_id=918146733677&lgi_partner=watcho&sp_r=movies/285750312243"';
        // const result = await browser.executeAdbCommand('shell', [command]);
        // console.log(result);
    });


});