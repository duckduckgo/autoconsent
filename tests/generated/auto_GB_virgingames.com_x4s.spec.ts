import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_virgingames.com_x4s', ['https://www.virgingames.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
