import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_flightrising.fandom.com_nze', ['https://flightrising.fandom.com/wiki/Flight_Rising_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
