import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nationalhighways.co.uk_lm3', ['https://nationalhighways.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
