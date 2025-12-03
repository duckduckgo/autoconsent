import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_magasins-u.com_77q', ['https://www.magasins-u.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
