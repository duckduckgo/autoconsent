import generateCMPTests from '../playwright/runner';

generateCMPTests('enzuzo', ['https://www.qettle.com/qettle-undersink-chiller']);

// These sites only serve the banner in regulated regions.
generateCMPTests('enzuzo', ['https://span.io/', 'https://bolt.health/telehealth-consent'], {
    onlyRegions: ['US', 'UK', 'DE'],
});

generateCMPTests('enzuzo', ['https://anrok.com/'], {
    onlyRegions: ['UK', 'DE'],
});
