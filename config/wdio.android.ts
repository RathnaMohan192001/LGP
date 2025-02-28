import { config } from "./wdio.conf";
import { join } from "path";
import type { Options } from "@wdio/types";

(config.specs = [
  //"../test/specs/Android/ChangeEnv.spec.ts",


   // "../test/specs/Android/OnBoarding.spec.ts",
    "../test/specs/Android/LoginAndSignUp.spec.ts",
  // "../test/specs/Android/Subscriptions.spec.ts",
  // "../test/specs/Android/DetailScreen.spec.ts",
  // "../test/specs/Android/ViewAll.spec.ts",
  // "../test/specs/Android/ExpiredUser.spec.ts",
  // "../test/specs/Android/LandingScreen.spec.ts",
  //  "../test/specs/Android/Download.spec.ts",
  //   "../test/specs/Android/Player.spec.ts",
  //   "../test/specs/Android/ParentalControl.spec.ts",


  //"../test/specs/AndroidTV/adb.spec.ts"


]),
  // Patterns to exclude.
  (config.exclude = [
    // 'path/to/excluded/files'
  ]),
  (config.capabilities = [
    {
      platformName: "Android",
      "appium:deviceName": "9304b15c",
      "appium:platformVersion": "14",
      "appium:automationName": "UiAutomator2",
      //Only For Debug builds
      // "appium:app": join(
      //   process.cwd(),
      //   "Apps/mobile-lionsgateplay-debug-6.13.2-3090.apk"
      // ),
      "appium:appPackage": "com.lionsgateplay.videoapp",
      "appium:appActivity":
        "com.parsifal.starz.ui.features.launcher.LauncherActivity",
      "appium:newCommandTimeout": 15000,
      "appium:noReset": false,
      "appium:fullReset": false,
    }
  ]),
  (config.port = 4723),
  (config.services = ["appium"]),
  (exports.config = config);
