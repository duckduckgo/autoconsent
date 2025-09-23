import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_deutsches-museum.de_biw', ['https://www.deutsches-museum.de/en/verkehrszentrum'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
