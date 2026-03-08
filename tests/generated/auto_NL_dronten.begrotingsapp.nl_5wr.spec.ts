import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dronten.begrotingsapp.nl_5wr', ['https://dronten.begrotingsapp.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
