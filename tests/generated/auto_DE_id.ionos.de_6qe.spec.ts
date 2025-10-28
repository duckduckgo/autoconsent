import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_id.ionos.de_6qe', ['https://id.ionos.de/identifier'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
