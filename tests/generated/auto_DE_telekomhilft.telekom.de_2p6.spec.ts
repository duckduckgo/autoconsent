import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_telekomhilft.telekom.de_2p6', ['https://telekomhilft.telekom.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
