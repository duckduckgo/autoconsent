import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_forums.frontier.co.uk_0', ['https://forums.frontier.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
