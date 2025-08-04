import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_englandstore.com_zud', ['https://www.englandstore.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
