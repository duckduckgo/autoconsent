import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zilverprijs.nl_vd3', ['https://www.zilverprijs.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
