import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tnt.com_zm2', ['https://www.tnt.com/express/fr_fr/site/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
