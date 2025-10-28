import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fightingirish.com_t6v', ['https://fightingirish.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
