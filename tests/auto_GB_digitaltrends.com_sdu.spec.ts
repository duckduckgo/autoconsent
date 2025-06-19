import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_digitaltrends.com_sdu', ['https://www.digitaltrends.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
