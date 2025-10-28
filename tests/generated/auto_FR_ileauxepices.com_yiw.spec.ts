import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ileauxepices.com_yiw', ['https://ileauxepices.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
