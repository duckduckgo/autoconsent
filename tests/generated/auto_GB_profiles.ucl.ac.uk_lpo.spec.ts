import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_profiles.ucl.ac.uk_lpo', ['https://profiles.ucl.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
