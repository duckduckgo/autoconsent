import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_biblio.ugent.be_5gd', ['https://biblio.ugent.be/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
