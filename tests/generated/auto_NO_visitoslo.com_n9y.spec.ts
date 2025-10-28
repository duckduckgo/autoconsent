import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_visitoslo.com_n9y', ['https://www.visitoslo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
