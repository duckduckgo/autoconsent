import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_curvissa.co.uk_ndd', ['https://www.curvissa.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
