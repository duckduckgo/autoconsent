import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_estudines.com_mi9', ['https://www.estudines.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
