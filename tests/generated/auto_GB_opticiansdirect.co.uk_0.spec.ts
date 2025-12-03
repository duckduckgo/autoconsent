import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_opticiansdirect.co.uk_0', ['https://www.opticiansdirect.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
