import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_psychologytoday.com_ig1', ['https://www.psychologytoday.com/us'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
