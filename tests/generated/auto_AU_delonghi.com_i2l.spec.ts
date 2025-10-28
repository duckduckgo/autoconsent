import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_delonghi.com_i2l', ['https://www.delonghi.com/en-au'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
