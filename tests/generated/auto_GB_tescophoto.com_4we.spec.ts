import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tescophoto.com_4we', ['https://www.tescophoto.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
