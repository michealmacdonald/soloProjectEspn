module.exports = {
    beforeEach: browser => {
        espnPage = browser.page.espnPage()
        espnPage
        .navigate()
    },
    after: browser => {
        espnPage.end()
    },
    'Check Home NFL Popout Menu': browser => {
        espnPage
        .hoverNfl()
        .verifyHeaders()
        .scoreboard()
    },
    'Verify NFL Pages': browser => {
        espnPage
        .schedule()
        .standings()
        .stats()
        .teams()
    },
    'Close Ticket Window': browser => {
        espnPage
        .tickets()
        .powerHeadline()
        .depthCharts()
        .injuries()
    },
    'Grab the First Headline Summary': browser => {
        espnPage
        .grabNews()
    }
}
