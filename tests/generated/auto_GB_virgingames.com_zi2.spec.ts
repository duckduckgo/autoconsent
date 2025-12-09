import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_virgingames.com_zi2', ['https://www.virgingames.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
