import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_euspares.co.uk_zqi', ['https://www.euspares.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
