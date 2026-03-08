import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_drinkcalvados.com_f9n', ['https://drinkcalvados.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
