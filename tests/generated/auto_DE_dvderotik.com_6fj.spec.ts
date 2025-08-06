import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dvderotik.com_6fj', ['https://www.dvderotik.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
