import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_clubspark.lta.org.uk_19t', ['https://clubspark.lta.org.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
