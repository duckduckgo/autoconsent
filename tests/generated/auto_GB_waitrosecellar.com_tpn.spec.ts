import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_waitrosecellar.com_tpn', ['https://www.waitrosecellar.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
