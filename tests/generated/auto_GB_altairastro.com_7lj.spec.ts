import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_altairastro.com_7lj', ['https://altairastro.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
