import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_concept-ge.co.uk_kuh', ['https://concept-ge.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
