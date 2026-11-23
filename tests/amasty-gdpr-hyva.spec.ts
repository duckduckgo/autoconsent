import generateCMPTests from '../playwright/runner';

generateCMPTests('amasty-gdpr-hyva', [
    'http://stovesareus.co.uk/',
    'https://www.strunz.com/',
    'https://www.agri-expert.fr/',
    'https://www.sigma-foto.de/',
    'https://www.drankgigant.nl/',
    'https://www.biocare.co.uk/',
    'https://www.wrendaledesigns.co.uk/',
    'https://www.snaintongolf.co.uk/',
    'http://aeschbach-chaussures.ch/',
    // Tabbed bar with in-bar group toggles
    'http://happybeds.co.uk/',
    // Decline link in the bar text
    'http://openhaardhout-gigant.nl/',
]);

// the site reloads the page after saving consent, so the self test never runs
generateCMPTests('amasty-gdpr-hyva', ['http://christmastreeworld.co.uk/'], {
    testSelfTest: false,
});

// no banner shown in the US
generateCMPTests('amasty-gdpr-hyva', ['https://www.brisa.fi/'], {
    skipRegions: ['US'],
});
