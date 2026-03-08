import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_approvedfood.co.uk_lqa', ['https://approvedfood.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
