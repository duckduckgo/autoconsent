import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_psoriasis-netz.de_hae', ['https://www.psoriasis-netz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
