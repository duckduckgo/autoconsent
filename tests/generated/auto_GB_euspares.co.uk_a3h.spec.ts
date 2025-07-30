import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_euspares.co.uk_a3h', ['https://www.euspares.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
