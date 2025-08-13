import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dvderotik.com_n41', ['https://www.dvderotik.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
