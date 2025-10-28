import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dushanwegner.com_3is', ['https://www.dushanwegner.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
