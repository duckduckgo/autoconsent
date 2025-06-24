import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gshock.casio.com_0', ['https://gshock.casio.com/uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
