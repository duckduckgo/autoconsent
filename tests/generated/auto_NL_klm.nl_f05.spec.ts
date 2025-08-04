import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_klm.nl_f05', ['https://www.klm.nl/en?showredirectnotice=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
