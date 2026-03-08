import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_digimapforschools.edina.ac.uk_peo', ['https://digimapforschools.edina.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
