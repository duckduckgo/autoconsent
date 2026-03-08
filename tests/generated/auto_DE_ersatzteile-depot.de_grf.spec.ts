import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ersatzteile-depot.de_grf', ['https://ersatzteile-depot.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
