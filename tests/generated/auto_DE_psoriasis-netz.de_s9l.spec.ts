import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_psoriasis-netz.de_s9l', ['https://www.psoriasis-netz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
