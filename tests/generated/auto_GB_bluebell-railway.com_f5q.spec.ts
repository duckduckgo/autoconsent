import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bluebell-railway.com_f5q', ['https://www.bluebell-railway.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
