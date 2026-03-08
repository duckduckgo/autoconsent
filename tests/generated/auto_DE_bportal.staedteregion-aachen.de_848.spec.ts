import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bportal.staedteregion-aachen.de_848', ['https://bportal.staedteregion-aachen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
