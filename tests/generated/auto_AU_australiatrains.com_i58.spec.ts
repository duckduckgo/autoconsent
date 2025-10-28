import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_australiatrains.com_i58', ['https://www.australiatrains.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
