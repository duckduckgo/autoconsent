import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mamabotanica.nl_m22', ['https://www.mamabotanica.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
