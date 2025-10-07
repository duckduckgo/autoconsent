import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hoseonline.de_pjt', ['https://www.hoseonline.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
