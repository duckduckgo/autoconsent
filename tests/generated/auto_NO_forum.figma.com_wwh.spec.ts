import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_forum.figma.com_wwh', ['https://forum.figma.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
