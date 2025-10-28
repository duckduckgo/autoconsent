import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bristol.ac.uk_q41', ['https://www.bristol.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
