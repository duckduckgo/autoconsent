import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_botanicalinstitute.org_gp5', ['https://botanicalinstitute.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
