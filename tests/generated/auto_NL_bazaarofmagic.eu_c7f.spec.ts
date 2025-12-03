import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bazaarofmagic.eu_c7f', ['https://www.bazaarofmagic.eu/en-WW'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
