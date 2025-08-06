import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frankfurt-main.ihk.de_xyh', ['https://www.frankfurt-main.ihk.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
