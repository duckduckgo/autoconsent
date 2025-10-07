import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_streamelements.com_1eu', ['https://streamelements.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
