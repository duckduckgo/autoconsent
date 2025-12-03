import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stories.com_ua6', ['https://www.stories.com/en-gb/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
