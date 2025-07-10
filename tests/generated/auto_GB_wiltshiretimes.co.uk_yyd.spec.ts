import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wiltshiretimes.co.uk_yyd', ['https://www.wiltshiretimes.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
