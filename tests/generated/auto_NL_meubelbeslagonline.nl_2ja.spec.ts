import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meubelbeslagonline.nl_2ja', ['https://www.meubelbeslagonline.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
