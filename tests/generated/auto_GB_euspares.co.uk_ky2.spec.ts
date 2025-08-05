import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_euspares.co.uk_ky2', ['https://www.euspares.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
