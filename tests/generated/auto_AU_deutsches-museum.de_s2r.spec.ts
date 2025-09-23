import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_deutsches-museum.de_s2r', ['https://www.deutsches-museum.de/en/verkehrszentrum'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
