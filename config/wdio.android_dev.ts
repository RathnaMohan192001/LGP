import { config } from "./wdio.conf";
import { join } from "path";
import type { Options } from "@wdio/types";

(config.specs = [
  //"../test/specs/Android_Dev/ChangeEnv.spec.ts",
  "../test/specs/Android_Dev/OnBoarding.spec.ts",
  "../test/specs/Android_Dev/LoginAndSignUp.spec.ts",
  "../test/specs/Android_Dev/Subscriptions.spec.ts",
  "../test/specs/Android_Dev/DetailScreen.spec.ts",
  "../test/specs/Android_Dev/ViewAll.spec.ts",
  "../test/specs/Android_Dev/ExpiredUser.spec.ts",
  "../test/specs/Android_Dev/LandingScreen.spec.ts",
  "../test/specs/Android_Dev/Download.spec.ts",
  "../test/specs/Android_Dev/Player.spec.ts",
  "../test/specs/Android_Dev/ParentalControl.spec.ts",
  //"../test/specs/Android_Dev/adb.spec.ts"


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
      //Only For Debug build
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
