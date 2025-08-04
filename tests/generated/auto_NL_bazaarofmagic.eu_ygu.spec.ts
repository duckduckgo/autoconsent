import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bazaarofmagic.eu_ygu', ['https://www.bazaarofmagic.eu/en-WW'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
