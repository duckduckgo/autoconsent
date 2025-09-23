import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deutsches-museum.de_jk3', ['https://www.deutsches-museum.de/en/verkehrszentrum'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
