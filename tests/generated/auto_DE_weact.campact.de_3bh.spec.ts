import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_weact.campact.de_3bh', ['https://weact.campact.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
