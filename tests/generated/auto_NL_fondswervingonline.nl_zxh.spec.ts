import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fondswervingonline.nl_zxh', ['https://www.fondswervingonline.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
