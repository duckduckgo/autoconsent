import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.arden.ac.uk_16w', ['https://careers.arden.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
