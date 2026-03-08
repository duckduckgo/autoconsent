import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_apps.webmapper.nl_nbs', ['https://apps.webmapper.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
