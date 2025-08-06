import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ondernemersplein.overheid.nl_rn4', ['https://ondernemersplein.overheid.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
