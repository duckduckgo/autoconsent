import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_salford.ac.uk_g7n', ['https://www.salford.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
