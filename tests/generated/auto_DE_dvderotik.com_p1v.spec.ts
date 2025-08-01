import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dvderotik.com_p1v', ['https://www.dvderotik.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
