import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_frascatitheater.nl_3uo', ['https://www.frascatitheater.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
