import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_esslingen.traumpalast.de_9p8', ['https://esslingen.traumpalast.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
