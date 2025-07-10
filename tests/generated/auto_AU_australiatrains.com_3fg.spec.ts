import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_australiatrains.com_3fg', ['https://www.australiatrains.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
