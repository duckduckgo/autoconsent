import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_thegoodlist.fr_ov9', ['https://www.thegoodlist.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
