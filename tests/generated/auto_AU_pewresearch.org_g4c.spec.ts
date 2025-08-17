import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pewresearch.org_g4c', ['https://www.pewresearch.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
