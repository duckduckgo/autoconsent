import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_banco.bradesco_bb1', ['https://banco.bradesco/html/classic/index.shtm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
