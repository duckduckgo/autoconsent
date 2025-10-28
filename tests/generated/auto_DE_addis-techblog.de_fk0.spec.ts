import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_addis-techblog.de_fk0', ['https://addis-techblog.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
