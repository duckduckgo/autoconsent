import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dehuishouding.nl_p88', ['https://dehuishouding.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
