import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mhplus-krankenkasse.de_ybj', ['https://www.mhplus-krankenkasse.de/privatkunden'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
