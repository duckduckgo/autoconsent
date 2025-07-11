import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_heraldscotland.com_adx', ['https://www.heraldscotland.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
