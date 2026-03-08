import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_friends.figma.com_med', ['https://friends.figma.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
