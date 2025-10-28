import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_denbypottery.com_4b4', ['https://www.denbypottery.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
