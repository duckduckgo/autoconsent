import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ratgeber.pcgameshardware.de_sz9', ['https://ratgeber.pcgameshardware.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
