import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_catalogue.surrey.ac.uk_b5z', ['https://catalogue.surrey.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
