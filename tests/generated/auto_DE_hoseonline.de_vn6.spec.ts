import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hoseonline.de_vn6', ['https://www.hoseonline.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
