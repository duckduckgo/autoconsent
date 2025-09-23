import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_deutsches-museum.de_9t0', ['https://www.deutsches-museum.de/en/verkehrszentrum'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
