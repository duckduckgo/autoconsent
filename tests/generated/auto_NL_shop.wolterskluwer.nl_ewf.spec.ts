import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_shop.wolterskluwer.nl_ewf', ['https://shop.wolterskluwer.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
