import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_emptychairpublisher.com_0sx', ['https://emptychairpublisher.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
