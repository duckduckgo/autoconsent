import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_meubelbeslagonline.nl_lfo', ['https://www.meubelbeslagonline.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
