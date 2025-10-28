import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cybertek.fr_6qk', ['https://www.cybertek.fr/boutique/index.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
