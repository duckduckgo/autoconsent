import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stories.com_32x', ['https://www.stories.com/de-de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
