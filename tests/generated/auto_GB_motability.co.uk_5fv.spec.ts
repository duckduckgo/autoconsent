import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_motability.co.uk_5fv', ['https://www.motability.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
