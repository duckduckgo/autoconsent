import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_club.auto-doc.fr_7cn', ['https://club.auto-doc.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
