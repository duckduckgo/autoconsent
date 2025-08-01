import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_5g-anbieter.info_t24', ['https://www.5g-anbieter.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
