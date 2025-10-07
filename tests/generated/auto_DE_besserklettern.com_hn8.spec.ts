import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_besserklettern.com_hn8', ['https://www.besserklettern.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
