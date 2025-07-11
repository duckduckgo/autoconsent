import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_forums.frontier.co.uk_dro', ['https://forums.frontier.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
