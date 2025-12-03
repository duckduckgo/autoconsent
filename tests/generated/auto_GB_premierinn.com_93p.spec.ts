import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_premierinn.com_93p', ['https://www.premierinn.com/gb/en/home.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
