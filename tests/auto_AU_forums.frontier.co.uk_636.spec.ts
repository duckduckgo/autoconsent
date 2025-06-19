import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_forums.frontier.co.uk_636', ['https://forums.frontier.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
