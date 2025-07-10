import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_royalcaribbean.com_1m2', ['https://www.royalcaribbean.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
