import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cirencester.gov.uk_mfk', ['https://cirencester.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
