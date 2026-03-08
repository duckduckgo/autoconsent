import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_containerdienst.de_e7r', ['https://containerdienst.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
