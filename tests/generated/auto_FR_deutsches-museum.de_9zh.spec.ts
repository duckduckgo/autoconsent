import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_deutsches-museum.de_9zh', ['https://www.deutsches-museum.de/en/verkehrszentrum'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
