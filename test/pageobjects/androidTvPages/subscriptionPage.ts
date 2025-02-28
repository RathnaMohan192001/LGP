import { th } from "date-fns/locale";
import OnBoardingPage from "../../pageobjects/androidTvPages/onBoardingPage";

class SubscriptionPage {

    get verifyPlanSelectionTitle() {
        return $('//android.widget.TextView[@resource-id="com.lionsgateplay.videoapp:id/paymentTitle"]');
    }

    get selectPlan() {
        return $$('(//android.view.ViewGroup[@resource-id="com.lionsgateplay.videoapp:id/payment_plan_item_view"])');
    }

    verifyPeriodAndPrice(index: number, index1: number) {
        return $(`(//android.view.ViewGroup[@resource-id="com.lionsgateplay.videoapp:id/payment_plan_item_view"])[${index}]/android.widget.TextView[${index1}]`);
    }


    async validateGooglePlay() {
        await (await OnBoardingPage.verifyPlanPageTitle).verifyElementIsDisplayedTrue('Choose your plan');
        await (await OnBoardingPage.clickOnGooglePlay).combinedClick('Google Play');
        //await browser.keys(['Enter']);
        await browser.pause(3000);
        await (await this.verifyPlanSelectionTitle).verifyElementIsDisplayedTrue('Choose a plan that’s right for you:');
    }

    async validateMonthAndPrice() {
        let plan = await this.selectPlan;
        for (let i = 0; i <= plan.length - 1; i++) {
            for (let j = 0; j <= 1; j++) {
                let item = await this.verifyPeriodAndPrice(i + 1, j + 1);
                console.log("Plan is:", await item.getText());
            }
            await browser.keys(["ArrowDown"]);

        }
    }
}

export default new SubscriptionPage();
