import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_organisatiegids.universiteitleiden.nl_yn4', ['https://www.organisatiegids.universiteitleiden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
