import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_es.pinterest.com_u4s', ['https://es.pinterest.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
