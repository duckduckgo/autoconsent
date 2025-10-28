import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mapetitemercerie.com_uy5', ['https://www.mapetitemercerie.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
