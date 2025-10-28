import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_liverpool.ac.uk_e16', ['https://www.liverpool.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
