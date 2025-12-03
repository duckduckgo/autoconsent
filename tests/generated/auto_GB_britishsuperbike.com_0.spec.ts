import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_britishsuperbike.com_0', ['https://www.britishsuperbike.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
