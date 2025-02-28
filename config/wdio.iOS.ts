import { config } from "./wdio.conf";
import { join } from "path";
import type { Options } from "@wdio/types";
 
(config.specs = [
 "../test/specs/IOS/onBoarding.spec.ts",
 "../test/specs/IOS/subscription.spec.ts",
 "../test/specs/IOS/loginAndSignup.spec.ts",
"../test/specs/IOS/downloads.spec.ts",
"../test/specs/IOS/detailScreen.spec.ts",
"../test/specs/IOS/expiredUser.spec.ts",
"../test/specs/IOS/viewAll.spec.ts",
"../test/specs/IOS/landingScreenAndMyList.spec.ts",
"../test/specs/IOS/parentalControl.spec.ts",
"../test/specs/IOS/player.spec.ts"
]),
  // Patterns to exclude.
  (config.exclude = [
    // 'path/to/excluded/files'
  ]),
  (config.capabilities = [
    {
      platformName: "ios",
      "appium:udid": "00008020-000974D41E80402E",
      "appium:platformVersion": "17.5.1",
      "appium:automationName": "XCUITest",
      "appium:bundleId": "com.lionsgateplay.videoapp",
    //   "appium:appActivity":
    //     "com.parsifal.starz.ui.features.launcher.LauncherActivity",
      "appium:newCommandTimeout": 15000,
      "appium:noReset": false,
    }
  ]),
  (config.port = 4723),
  (config.services = ["appium"]),
  (exports.config = config);