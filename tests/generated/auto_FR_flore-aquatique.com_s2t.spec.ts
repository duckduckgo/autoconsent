import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_flore-aquatique.com_s2t', ['https://flore-aquatique.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
