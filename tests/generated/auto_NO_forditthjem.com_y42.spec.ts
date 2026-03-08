import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_forditthjem.com_y42', ['https://forditthjem.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
