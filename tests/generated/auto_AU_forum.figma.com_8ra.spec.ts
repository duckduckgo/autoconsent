import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_forum.figma.com_8ra', ['https://forum.figma.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
