import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_madeingreatbritain.uk_1ol', ['https://madeingreatbritain.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
