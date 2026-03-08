import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_britishfires.com_2q1', ['https://britishfires.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
