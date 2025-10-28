import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_clubspark.lta.org.uk_96w', ['https://clubspark.lta.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
