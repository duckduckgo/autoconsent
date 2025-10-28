import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cite-espace.com_c2h', ['https://www.cite-espace.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
