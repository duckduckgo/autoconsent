import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_docs.convex.dev_i8s', ['https://docs.convex.dev/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
