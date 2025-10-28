import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dushanwegner.com_zeu', ['https://www.dushanwegner.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
