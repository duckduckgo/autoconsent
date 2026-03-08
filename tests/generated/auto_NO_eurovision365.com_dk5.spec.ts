import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eurovision365.com_dk5', ['https://eurovision365.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
