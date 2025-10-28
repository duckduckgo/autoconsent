import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thebritishacademy.ac.uk_b4c', ['https://www.thebritishacademy.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
