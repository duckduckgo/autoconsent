import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auftragsglueck.de_pjm', ['https://auftragsglueck.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
