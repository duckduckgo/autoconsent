import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hoseonline.de_vqo', ['https://www.hoseonline.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
