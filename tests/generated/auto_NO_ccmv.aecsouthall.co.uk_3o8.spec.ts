import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ccmv.aecsouthall.co.uk_3o8', ['https://ccmv.aecsouthall.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
