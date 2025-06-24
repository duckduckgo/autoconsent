import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_salomon.com_b7d', ['https://www.salomon.com/en-gb'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
