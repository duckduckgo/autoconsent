import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sparepartstore24.co.uk_0', ['https://www.sparepartstore24.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
