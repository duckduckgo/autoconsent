import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_premierinn.com_5rk', ['https://www.premierinn.com/gb/en/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
