import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_edgehill.ac.uk_63w', ['https://www.edgehill.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
