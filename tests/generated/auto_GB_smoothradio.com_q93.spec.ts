import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_smoothradio.com_q93', ['https://www.smoothradio.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
