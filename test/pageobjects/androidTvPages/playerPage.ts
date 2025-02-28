class PlayerPage {
    get verifySeason() {
        return $$('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.lionsgateplay.videoapp:id/browse_grid"])[1]/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.TextView[1]');
    }

    get verifyEpisodes() {
        return $('(//androidx.recyclerview.widget.RecyclerView[@resource-id="com.lionsgateplay.videoapp:id/browse_grid"])[1]/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.TextView[2]');
    }


    async validateSeason() {
        let seasons = await this.verifySeason;
        for (let i = 0; i <= seasons.length - 1; i++) {
            await seasons[i].verifyElementIsDisplayedTrue(await seasons[i].getText());
            await (await this.verifyEpisodes).verifyElementIsDisplayedTrue(await (await this.verifyEpisodes).getText());
            // await browser.keys(['Enter']);
            // await browser.pause(3000);
            // await browser.pressKeyCode(4);
            // await browser.pause(1000);
            // await browser.pressKeyCode(4);
            // await browser.pause(2000);
            await browser.keys(['ArrowLeft']);
            await browser.keys(['ArrowDown', 'Enter']);
            //await browser.keys(['Enter']);
            // await browser.keys(['ArrowLeft']);
        }
    }
}

export default new PlayerPage();
