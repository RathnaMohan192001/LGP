import { config } from "./wdio.conf";
import { join } from "path";
import type { Options } from "@wdio/types";

(config.specs = [
    //  "../test/specs/AndroidTV/buildEnv.spec.ts",
    //  "../test/specs/AndroidTV/adb.spec.ts",

    "../test/specs/AndroidTV/onBoarding.spec.ts",
    "../test/specs/AndroidTV/signupAndLogin.spec.ts",
    "../test/specs/AndroidTV/detailScreen.spec.ts",
    "../test/specs/AndroidTV/viewAll.spec.ts",
    "../test/specs/AndroidTV/expiredUser.spec.ts",
     "../test/specs/AndroidTV/landingScreenAndMyList.spec.ts",
    "../test/specs/AndroidTV/player.spec.ts",
    "../test/specs/AndroidTV/subscription.spec.ts",

   
]),
    // Patterns to exclude.
    (config.exclude = [
        // 'path/to/excluded/files'
    ]),
    (config.capabilities = [
        {

            platformName: "Android",
            "appium:deviceName": "192.168.3.54:5555",
            "appium:platformVersion": "11",
            "appium:automationName": "UiAutomator2",
            //Only For Debug build
            // "appium:app": join(
            //     process.cwd(),
            //     "Apps/tv-lionsgateplay-universal-debug-v6.11(3089)-free-trial (1).apk"
            // ),
            "appium:appPackage": "com.lionsgateplay.videoapp",
            "appium:appActivity":
                "com.parsifal.starz.ui.features.launcher.LauncherActivity",
            "appium:newCommandTimeout": 15000,
            "appium:noReset": false,
        }
    ]),
    //(config.port = 4723),
    (config.services = ["appium"]),
    (exports.config = config);
