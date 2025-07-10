import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_boilerjuice.com_r6g', ['https://www.boilerjuice.com/uk'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
