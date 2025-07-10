import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stories.com_12x', ['https://www.stories.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
