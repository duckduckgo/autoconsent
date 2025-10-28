import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bank.marksandspencer.com_1dz', ['https://bank.marksandspencer.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
