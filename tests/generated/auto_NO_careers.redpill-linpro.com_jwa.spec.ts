import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_careers.redpill-linpro.com_jwa', ['https://careers.redpill-linpro.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
