import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_transcend-info.com_dai', ['https://de.transcend-info.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
