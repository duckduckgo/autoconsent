import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_corderie.marcq-en-baroeul.fr_fm2', ['https://corderie.marcq-en-baroeul.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
