import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutsches-schulportal.de_9p3', ['https://deutsches-schulportal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
