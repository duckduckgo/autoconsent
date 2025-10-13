import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mattressnextday.co.uk_6wm', ['https://www.mattressnextday.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
