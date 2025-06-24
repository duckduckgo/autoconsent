import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_everysaving.co.uk_38t', ['https://www.everysaving.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
