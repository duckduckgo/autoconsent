import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_alterainfra.com_van', ['https://alterainfra.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
