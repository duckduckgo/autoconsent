import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_placelibertine.com_3pl', ['https://www.placelibertine.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
