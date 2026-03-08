import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_esv-schwenger.de_di9', ['https://esv-schwenger.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
