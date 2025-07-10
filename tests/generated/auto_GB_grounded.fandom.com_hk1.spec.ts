import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_grounded.fandom.com_hk1', ['https://grounded.fandom.com/wiki/Grounded_Wiki'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
