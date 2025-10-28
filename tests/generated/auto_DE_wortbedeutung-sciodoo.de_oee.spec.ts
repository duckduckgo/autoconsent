import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wortbedeutung-sciodoo.de_oee', ['https://wortbedeutung-sciodoo.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
