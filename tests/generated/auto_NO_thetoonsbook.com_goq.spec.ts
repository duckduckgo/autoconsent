import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_thetoonsbook.com_goq', ['https://www.thetoonsbook.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
