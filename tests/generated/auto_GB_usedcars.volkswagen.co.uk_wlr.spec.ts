import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_usedcars.volkswagen.co.uk_wlr', ['https://usedcars.volkswagen.co.uk/en/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
