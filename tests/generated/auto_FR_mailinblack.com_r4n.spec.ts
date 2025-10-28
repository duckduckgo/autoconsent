import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mailinblack.com_r4n', ['https://www.mailinblack.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
