import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_webapps.stackexchange.com_uks', ['https://webapps.stackexchange.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
