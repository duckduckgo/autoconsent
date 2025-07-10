import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_salomon.com_4zn', ['https://www.salomon.com/en-gb'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
