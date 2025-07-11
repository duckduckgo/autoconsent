import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stories.com_tvn', ['https://www.stories.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
