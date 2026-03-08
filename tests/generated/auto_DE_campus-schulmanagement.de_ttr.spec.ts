import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_campus-schulmanagement.de_ttr', ['https://evido-magazin.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
