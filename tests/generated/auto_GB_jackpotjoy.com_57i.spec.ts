import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jackpotjoy.com_57i', ['https://www.jackpotjoy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
