import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_free-auto-repair-manuals.com_b0v', ['https://free-auto-repair-manuals.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
