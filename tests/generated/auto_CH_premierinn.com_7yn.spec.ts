import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_premierinn.com_7yn', ['https://www.premierinn.com/gb/en/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
