import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_corporate.marksandspencer.com_vuy', ['https://corporate.marksandspencer.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
