import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_coolstays.com_t8t', ['https://www.coolstays.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
