import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_forum.figma.com_9gi', ['https://forum.figma.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
