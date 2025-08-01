import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forum.vodafone.de_0cl', ['https://forum.vodafone.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
