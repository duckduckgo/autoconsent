import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ondernemersplein.overheid.nl_blr', ['https://ondernemersplein.overheid.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
