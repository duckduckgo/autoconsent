import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_leedsbeckett.ac.uk_0', ['https://www.leedsbeckett.ac.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
