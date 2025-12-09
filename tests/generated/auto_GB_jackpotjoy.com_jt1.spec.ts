import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jackpotjoy.com_jt1', ['https://www.jackpotjoy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
