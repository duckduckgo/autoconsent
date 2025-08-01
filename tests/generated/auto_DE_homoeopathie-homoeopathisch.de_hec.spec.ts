import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_homoeopathie-homoeopathisch.de_hec', ['https://www.homoeopathie-homoeopathisch.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
