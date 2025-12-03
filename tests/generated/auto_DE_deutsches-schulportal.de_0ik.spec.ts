import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_deutsches-schulportal.de_0ik', ['https://deutsches-schulportal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
