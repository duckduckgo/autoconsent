import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kraeuterhaus.de_ugu', ['https://www.kraeuterhaus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
