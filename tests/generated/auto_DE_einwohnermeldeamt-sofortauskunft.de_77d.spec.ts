import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_einwohnermeldeamt-sofortauskunft.de_77d', ['https://einwohnermeldeamt-sofortauskunft.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
