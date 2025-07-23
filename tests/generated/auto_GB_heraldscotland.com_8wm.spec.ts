import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_heraldscotland.com_8wm', ['https://www.heraldscotland.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
