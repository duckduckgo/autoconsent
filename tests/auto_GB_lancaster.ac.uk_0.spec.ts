import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_lancaster.ac.uk_0', ['https://www.lancaster.ac.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
