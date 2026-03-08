import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_activecollab.com_zgz', ['https://activecollab.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
