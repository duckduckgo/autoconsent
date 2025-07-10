import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bloomsbury.com_o3a', ['https://www.bloomsbury.com/uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
