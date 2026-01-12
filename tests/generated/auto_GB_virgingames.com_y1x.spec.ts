import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_virgingames.com_y1x', ['https://www.virgingames.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
