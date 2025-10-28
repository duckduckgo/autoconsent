import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_elementgames.co.uk_t5x', ['https://elementgames.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
