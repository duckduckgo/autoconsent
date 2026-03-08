import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_careers.hugoboss.com_lq5', ['https://careers.hugoboss.com/global/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
