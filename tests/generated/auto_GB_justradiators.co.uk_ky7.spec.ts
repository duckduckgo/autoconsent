import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_justradiators.co.uk_ky7', ['https://www.justradiators.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
