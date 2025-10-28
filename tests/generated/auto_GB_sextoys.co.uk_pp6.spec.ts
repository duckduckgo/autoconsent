import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sextoys.co.uk_pp6', ['https://www.sextoys.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
