import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_frascatitheater.nl_wky', ['https://www.frascatitheater.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
