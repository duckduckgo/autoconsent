import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_karenmillen.com_n1r', ['https://www.karenmillen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
