import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_www7.marksandspencer.com_1tk', ['https://www7.marksandspencer.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
