import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fotokoch.de_bag', ['https://www.fotokoch.de/en/index.html?pfad=index&rewrite=on'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
