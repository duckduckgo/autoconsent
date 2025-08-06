import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cranger-kirmes.de_eiw', ['https://cranger-kirmes.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
