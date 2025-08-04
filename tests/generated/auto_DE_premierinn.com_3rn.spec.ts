import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_premierinn.com_3rn', ['https://www.premierinn.com/gb/en/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
