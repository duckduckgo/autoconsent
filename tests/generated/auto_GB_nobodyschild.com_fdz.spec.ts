import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nobodyschild.com_fdz', ['https://www.nobodyschild.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
