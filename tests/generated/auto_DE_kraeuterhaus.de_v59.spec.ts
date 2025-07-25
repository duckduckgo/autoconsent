import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kraeuterhaus.de_v59', ['https://www.kraeuterhaus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
