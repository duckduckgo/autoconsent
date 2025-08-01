import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mamabotanica.nl_v40', ['https://www.mamabotanica.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
