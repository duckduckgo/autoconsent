import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_deutsches-museum.de_j08', ['https://www.deutsches-museum.de/en/verkehrszentrum'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
