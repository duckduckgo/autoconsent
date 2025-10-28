import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_visitscotland.com_s6k', ['https://www.visitscotland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
