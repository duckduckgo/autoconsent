import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_5g-anbieter.info_7uy', ['https://www.5g-anbieter.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
