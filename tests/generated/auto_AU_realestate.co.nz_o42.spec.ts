import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_realestate.co.nz_o42', ['https://www.realestate.co.nz/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
