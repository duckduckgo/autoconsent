import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dumfries-house.org.uk_s9s', ['https://dumfries-house.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
