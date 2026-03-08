import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bibliothek.velbert.de_wmt', ['https://bibliothek.velbert.de/startseite'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
