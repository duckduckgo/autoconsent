import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hattrick.org_53m', ['https://www.hattrick.org/en-us/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
