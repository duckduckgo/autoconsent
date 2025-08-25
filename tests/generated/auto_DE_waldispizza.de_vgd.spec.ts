import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_waldispizza.de_vgd', ['https://www.waldispizza.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
