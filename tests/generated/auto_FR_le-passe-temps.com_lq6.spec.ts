import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_le-passe-temps.com_lq6', ['https://www.le-passe-temps.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
