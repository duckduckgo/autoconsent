import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_famtastique.com_di5', ['https://famtastique.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
