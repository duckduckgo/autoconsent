import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_isolatieonline.nl_wcm', ['https://www.isolatieonline.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
