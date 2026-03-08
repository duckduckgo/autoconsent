import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_esv-elibrary.de_eao', ['https://esv-elibrary.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
