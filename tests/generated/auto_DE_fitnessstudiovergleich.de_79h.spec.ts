import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fitnessstudiovergleich.de_79h', ['https://fragfitty.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
