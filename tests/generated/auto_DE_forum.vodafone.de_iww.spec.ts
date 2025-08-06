import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forum.vodafone.de_iww', ['https://forum.vodafone.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
