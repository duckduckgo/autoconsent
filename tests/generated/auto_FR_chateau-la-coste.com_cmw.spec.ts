import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chateau-la-coste.com_cmw', ['https://chateau-la-coste.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
