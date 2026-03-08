import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_atalante-cinema.org_xa6', ['https://atalante-cinema.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
