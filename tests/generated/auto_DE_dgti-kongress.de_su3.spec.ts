import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dgti-kongress.de_su3', ['https://dgti-kongress.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
