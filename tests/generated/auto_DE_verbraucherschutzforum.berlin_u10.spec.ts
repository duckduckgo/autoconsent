import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_verbraucherschutzforum.berlin_u10', ['https://verbraucherschutzforum.berlin/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
