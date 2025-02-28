class PlayerPage {
    get backArrow() {
        return $('player arrow back')
        // return $('//XCUIElementTypeButton[@name="player arrow back"]')
    }

    get airPlay() {
        return $('AirPlay')
        // return $('//XCUIElementTypeButton[@name="AirPlay"]');
    }

    get setting() {
        return $('player settings')
        //return $('//XCUIElementTypeButton[@name="player settings"]');
    }

    get backwordArrow() {
        return $('player seek backward')
        //return $('//XCUIElementTypeButton[@name="player seek backward"]');
    }

    get playAndPause() {
        return $('player play')
        //return $('//XCUIElementTypeButton[@name="player play"]');
    }

    get forwardArrow() {
        return $('player seek forward')
        //return $('//XCUIElementTypeButton[@name="player seek forward"]')
    }

    get seekbar() {
        return $('//XCUIElementTypeSlider[@value="0%"]');
    }

    get seekbarEnd() {
        return $('//XCUIElementTypeStaticText[@name="1:51:23"]')
    }

    get playerScreen() {
        return $('//XCUIElementTypeApplication[@name="LIONSGATEPLAY"]/XCUIElementTypeWindow[4]/XCUIElementTypeOther');
    }

    async validateContentPlayback() {
        await browser.pause(6000);
        await (await this.playerScreen).moveTo()
        await (await this.setting).verifyElementIsDisplayedTrue("Setting Icon");
        // await(await this.playAndPause).combinedClick("Play and Pause");
        // await(await this.playerScreen).moveTo()
        // await(await this.playAndPause).combinedClick("Play and Pause");
        // await browser.pause(6000);
        // await(await this.playerScreen).moveTo()
        // await(await this.playerScreen).moveTo()
        // await(await this.forwardArrow).combinedClick("Forward");
        // await browser.pause(6000);
        // await(await this.playerScreen).moveTo()
        // await(await this.playerScreen).moveTo()
        // await(await this.backwordArrow).combinedClick("Backward");
        // await browser.pause(6000);
        // await(await this.playerScreen).moveTo()
        // await(await this.playAndPause).combinedClick("Play and Pause");        
        // await(await this.playerScreen).moveTo()
        // await(await this.backArrow).combinedClick("Back Arrow Icon");
        // await(await this.playerScreen).moveTo()
        // await(await this.playAndPause).combinedClick("Play and Pause");
        // await(await this.backArrow).combinedClick("Back Arrow Icon");
        // await(await this.airPlay).verifyElementIsDisplayedTrue("AirPlay Icon");
        // await(await this.backArrow).combinedClick("Back Arrow Icon");
    }
}

export default new PlayerPage();