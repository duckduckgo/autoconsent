import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forum.waffen-online.de_fsv', ['https://forum.waffen-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
