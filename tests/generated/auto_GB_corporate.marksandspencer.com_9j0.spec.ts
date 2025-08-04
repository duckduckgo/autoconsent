import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_corporate.marksandspencer.com_9j0', ['https://corporate.marksandspencer.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
