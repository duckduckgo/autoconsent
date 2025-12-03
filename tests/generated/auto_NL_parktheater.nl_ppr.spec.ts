import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_parktheater.nl_ppr', ['https://www.parktheater.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
