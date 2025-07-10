import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_realestate.co.nz_dm1', ['https://www.realestate.co.nz/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
