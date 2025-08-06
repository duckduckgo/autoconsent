import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gesundheits-fakten.de_64a', ['https://www.gesundheits-fakten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
