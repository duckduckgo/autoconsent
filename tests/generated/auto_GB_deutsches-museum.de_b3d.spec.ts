import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_deutsches-museum.de_b3d', ['https://www.deutsches-museum.de/en/verkehrszentrum'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
