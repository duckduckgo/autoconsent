import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_firstlightoptics.com_dph', ['https://www.firstlightoptics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
