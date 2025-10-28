import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_datenbank.nwb.de_x2u', ['https://datenbank.nwb.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
