import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_plymouth.ac.uk_0', ['https://www.plymouth.ac.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
