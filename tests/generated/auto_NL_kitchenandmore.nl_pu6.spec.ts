import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kitchenandmore.nl_pu6', ['https://www.kitchenandmore.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
