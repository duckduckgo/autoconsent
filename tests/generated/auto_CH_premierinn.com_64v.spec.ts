import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_premierinn.com_64v', ['https://www.premierinn.com/gb/en/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
