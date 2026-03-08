import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amersfoort.sp.nl_cej', ['https://amersfoort.sp.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
