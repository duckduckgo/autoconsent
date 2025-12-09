import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kitchenandmore.nl_jd7', ['https://www.kitchenandmore.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
