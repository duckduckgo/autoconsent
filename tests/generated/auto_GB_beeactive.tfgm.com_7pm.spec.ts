import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_beeactive.tfgm.com_7pm', ['https://beeactive.tfgm.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
