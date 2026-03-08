import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_digital.deutsches-museum.de_eqa', ['https://digital.deutsches-museum.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
