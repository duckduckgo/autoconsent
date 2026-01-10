import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_humanrights.gov.au_oxf', ['https://humanrights.gov.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
