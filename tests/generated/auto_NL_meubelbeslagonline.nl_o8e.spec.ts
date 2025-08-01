import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meubelbeslagonline.nl_o8e', ['https://www.meubelbeslagonline.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
