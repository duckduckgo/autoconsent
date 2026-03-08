import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_careers.papirfly.com_ee7', ['https://careers.papirfly.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
