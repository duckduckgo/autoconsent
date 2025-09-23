import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_deutsches-museum.de_5ap', ['https://www.deutsches-museum.de/en/verkehrszentrum'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
