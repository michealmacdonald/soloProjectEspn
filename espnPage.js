var nflCommands = {
    hoverNfl: function(){
        this
        .useXpath()
        .waitForElementPresent('@nfl')
        .moveToElement('@nfl', '5', '5')
        .waitForElementVisible('/html/body/div[6]/div[2]/header/nav[1]/ul/li[1]/div/ul[2]/li/div/ul[8]/li[5]/a/span/span[1]')
        .getText('/html/body/div[6]/div[2]/header/nav[1]/ul/li[1]/div/ul[2]/li/div/ul[8]/li[5]/a/span/span[1]', function(result) {
            this.assert.equal(result.value, "Seattle Seahawks");
            console.log('Pop out menu verified. Last team shown on the list -', result.value)
        })
        return this
    },
    verifyHeaders: function(){
        this
        .api.fullscreenWindow(function(result) {
            console.log(result)
        })
        this
        .useXpath()
        .waitForElementVisible('@nfl')
        .click('@nfl')
        .waitForElementVisible('//a[@name="&lpos=subnav+subnav_nfl_index"]')
        .moveToElement('//a[@class="icon-font-after icon-search-solid-after"]', '5', '5')
        .moveToElement('@home', '5', '5')
        .verify.containsText('@home', "Home")
        .moveToElement('@scores', '5', '5')
        .verify.containsText('@scores', "Scores")
        .moveToElement('@schedule', '5', '5')
        .verify.containsText('@schedule', "Schedule")
        .moveToElement('@standings', '5', '5')
        .verify.containsText('@standings', "Standings")
        .moveToElement('@stats', '5', '5')
        .verify.containsText('@stats', "Stats")
        .moveToElement('//a[@name="&lpos=subnav+subnav_nfl_season_leaders"]', '5', '5')
        .verify.containsText('//a[@name="&lpos=subnav+subnav_nfl_season_leaders"]', "Season Leaders")
        .moveToElement('//a[@name="&lpos=subnav+subnav_nfl_weekly_leaders"]', '5', '5')
        .verify.containsText('//a[@name="&lpos=subnav+subnav_nfl_weekly_leaders"]', "Weekly Leaders")
        .moveToElement('//a[@name="&lpos=subnav+subnav_nfl_attendance"]', '5', '5')
        .verify.containsText('//a[@name="&lpos=subnav+subnav_nfl_attendance"]', "Attendance")
        .moveToElement('//a[@name="&lpos=subnav+subnav_nfl_total_qbr"]', '5', '5')
        .verify.containsText('//a[@name="&lpos=subnav+subnav_nfl_total_qbr"]', "Total QBR")
        .moveToElement('@teams', '5', '5')
        .waitForElementVisible('//a[@name="&lpos=subnav+subnav_nfl_buffalo_bills"]')
        .getText('//a[@name="&lpos=subnav+subnav_nfl_buffalo_bills"]', function(result) {
            console.log('Found the first team in the pop out menu to be -', result.value)
        })
        .moveToElement('@tickets', '5', '5')
        .verify.containsText('@tickets', "Tickets")
        .moveToElement('@powerRankings', '5', '5')
        .verify.containsText('@powerRankings', "Power Rankings")
        .moveToElement('@depthCharts', '5', '5')
        .verify.containsText('@depthCharts', "Depth Charts")
        .moveToElement('@injuries', '5', '5')
        .verify.containsText('@injuries', "Injuries")
        return this
    },
    scoreboard: function() {
        this
        .useXpath()
        .waitForElementVisible('@nfl')
        .click('@nfl')
        .moveToElement('//a[@class="icon-font-after icon-search-solid-after"]', '5', '5')
        .waitForElementPresent('@scores')
        .click('@scores')
        // .pause()
        .waitForElementVisible('//h2[contains(text(), "Thursday, ")]')
        .getText('//h2[contains(text(), "Thursday, ")]', function(result) {
            console.log('On', result.value)
        })
        // .pause()
        .getText('(//tbody[@id="teams"])[1]', function(result) {
            console.log('', result.value)
        })
        return this
    },
    schedule: function() {
        this
        .useXpath()
        .waitForElementVisible('@nfl')
        .click('@nfl')
        .moveToElement('//a[@class="icon-font-after icon-search-solid-after"]', '5', '5')
        .waitForElementVisible('@schedule')
        .click('@schedule')
        .waitForElementPresent('//button[contains(text(), "Team Schedules")]')
        .waitForElementPresent('//a[@href="http://www.espn.com/nfl/team/schedule/_/name/bal"]')
        .moveToElement('//button[contains(text(), "Team Schedules")]', '7', '7')
        // .waitForElementPresent('//a[@href="http://www.espn.com/nfl/team/schedule/_/name/bal"]')
        // .pause()
        .click('//a[@href="http://www.espn.com/nfl/team/schedule/_/name/bal"]')
        .waitForElementPresent('//h1[@class="headline headline__h1 dib"]')
        .verify.containsText('//h1[@class="headline headline__h1 dib"]', "Baltimore Ravens Schedule 2019")
        .api.back()
        this
        return this
    },
    standings: function() {
        this
        .useXpath()
        .waitForElementVisible('@standings')
        .click('@standings')
        .waitForElementPresent('//a[contains(text(), "Conference")]')
        .click('//a[contains(text(), "Conference")]')
        .waitForElementPresent('(//tr[@class="Table__TR Table__TR--sm Table__even"])[17]')
        .getText('(//tr[@class="Table__TR Table__TR--sm Table__even"])[1]', function(result) {
            console.log('Leading the AFC:', result.value)
        })
        .getText('(//tr[@class="Table__TR Table__TR--sm Table__even"])[17]', function(result) {
            console.log('Leading the NFC:', result.value)
        })
        console.log('Note bug found on New Orleans Saints "-- >"')
        return this
    },
    stats: function() {
        this
        .useXpath()
        .waitForElementVisible('@stats2')
        .click('@stats2')
        .waitForElementVisible('//h1[contains(text(), "NFL Stat Leaders 2019")]')
        .getText('(//tr[@class="Table__TR Table__TR--sm Table__even"])[1]', function(result) {
            console.log('PASSING YDS  #', result.value)
        })
        .getText('(//tr[@class="Table__TR Table__TR--sm Table__even"])[6]', function(result) {
            console.log('RUSH YDS  #', result.value)
        })
        .getText('(//tr[@class="Table__TR Table__TR--sm Table__even"])[11]', function(result) {
            console.log('REC YDS  #', result.value)
        })
        .getText('(//tr[@class="Table__TR Table__TR--sm Table__even"])[16]', function(result) {
            console.log('TACKLES  #', result.value)
        })
        .getText('(//tr[@class="Table__TR Table__TR--sm Table__even"])[21]', function(result) {
            console.log('SACKS  #', result.value)})
        .getText('(//tr[@class="Table__TR Table__TR--sm Table__even"])[26]', function(result) {
            console.log('INT  #', result.value)
        })
        return this
    },
    teams: function() {
        this
        .useXpath()
        .waitForElementVisible('@teams2')
        .click('@teams2')
        .waitForElementPresent('//h2[contains(text(), "Chicago Bears")]')
        // .pause()
        .click('//a[@href="/nfl/team/_/name/chi/chicago-bears"]')
        .waitForElementPresent('//article/header/h1[contains(text(), "Team Stats")]')
        .getText('//article/header/h1[contains(text(), "Team Stats")]', function(result) {
            console.log('', result.value)
        })
        .getText('(//div[@class="content"])[2]', function(result) {
            console.log('unclear what these stats represent, could be more clear', result.value)
        })
        .api.back()
        this
        .waitForElementVisible('@teams2')
        return this
    },
    tickets: function() {
        var self = this
        this
        .api.fullscreenWindow(function(result) {
            console.log(result)
        })
        this
        .useXpath()
        .waitForElementVisible('@nfl')
        .click('@nfl')
        .moveToElement('//a[@class="icon-font-after icon-search-solid-after"]', '5', '5')
        .waitForElementPresent('@tickets2')
        .click('@tickets2')
        .api.windowHandles(function(result) {
            var handle = result.value[1];
            self.api.switchWindow(handle);
        })
        this
        .waitForElementPresent('//header[@role="banner"]')
        .pause(100)
        .api.closeWindow()
        this
        .api.windowHandles(function(result) {
            var handle = result.value[0];
            self.api.switchWindow(handle);
        })
        this
        // .pause()
        return this 
    },
    powerHeadline: function() {
        this
        .useXpath()
        .waitForElementPresent('@powerRankings')
        .click('@powerRankings')
        .waitForElementPresent('(//header[@class="article-header"])[1]')
        .getText('(//header[@class="article-header"])[1]', function(result) {
            console.log('Power Ranking Headline reads:', result.value)
        })
        return this
    },
    depthCharts: function() {
        this
        .useXpath()
        .waitForElementPresent('@depthCharts')
        .click('@depthCharts')
        .waitForElementPresent('(//header[@class="article-header"])[1]')
        .getText('(//header[@class="article-header"])[1]', function(result) {
            console.log('Depth Chart Headline reads:', result.value)
        })
        return this
    },
    injuries: function() {
        this
        .useXpath()
        .waitForElementPresent('@injuries')
        .click('@injuries')
        .waitForElementPresent('(//section[@class="ResponsiveTable Table__league-injuries"])[29]')
        .getText('(//section[@class="ResponsiveTable Table__league-injuries"])[29]', function(result) {
            console.log('Injuries for the', result.value)
        })
        return this
    },
    grabNews: function() {
        this
        .api.fullscreenWindow(function(result) {
            console.log(result)
        })
        this
        .useXpath()
        .waitForElementPresent('@nfl')
        .click('@nfl')
        .moveToElement('//a[@class="icon-font-after icon-search-solid-after"]', '5', '5')
        .waitForElementPresent('//p[@class="contentItem__subhead contentItem__subhead--story contentItem__subhead--hero"]')
        .getText('//p[@class="contentItem__subhead contentItem__subhead--story contentItem__subhead--hero"]', function(result) {
            console.log('News This Week:', result.value)
        })
        return this
    },
}
module.exports = {
    url: 'https://www.espn.com/',
    commands: [nflCommands],
    elements: {
        nfl: {
            selector: '//a[@name="&lpos=sitenavdefault+sitenav_nfl"]',
            locateStrategy: 'xpath'
        },
        home: {
            selector: '//a[@name="&lpos=subnav+subnav_nfl_index"]',
            locateStrategy: 'xpath'
        },
        scores: {
            selector: '//a/span[contains(text(), "Scores")]',
            locateStrategy: 'xpath'
        },
        schedule: {
            selector: '//a/span[contains(text(), "Schedule")]',
            locateStrategy: 'xpath'
        },
        standings: {
            selector: '//a/span[contains(text(), "Standings")]',
            locateStrategy: 'xpath'
        },
        stats: {
            selector: '//a[@name="&lpos=subnav+subnav_nfl_stats"]',
            locateStrategy: 'xpath'
        },
        stats2: {
            selector: '(//a[@class="AnchorLink Nav__Secondary__Menu__Link clr-gray-01 flex items-center ph3"])[5]',
            locateStrategy: 'xpath'
        },
        teams: {
            selector: '//a[@name="&lpos=subnav+subnav_nfl_teams"]',
            locateStrategy: 'xpath'
        },
        teams2: {
            selector: '//a/span[contains(text(), "Teams")]',
            locateStrategy: 'xpath'
        },
        tickets: {
            selector: '//a[@name="&lpos=subnav+subnav_nfl_tickets"]',
            locateStrategy: 'xpath'
        },
        tickets2: {
            selector: '//a/span[contains(text(), "Tickets")]',
            locateStrategy: 'xpath'
        },
        powerRankings: {
            selector: '//a/span[contains(text(), "Power Rankings")]',
            locateStrategy: 'xpath'
        },
        depthCharts: {
            selector: '//a/span[contains(text(), "Depth Chart")]',
            locateStrategy: 'xpath'
        },
        injuries: {
            selector: '//a/span[contains(text(), "Injuries")]',
            locateStrategy: 'xpath'
        }
    }
}
