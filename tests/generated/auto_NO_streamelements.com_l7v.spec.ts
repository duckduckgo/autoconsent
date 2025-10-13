import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_streamelements.com_l7v', ['https://streamelements.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
