import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theartnewspaper.com_b4r', ['https://www.theartnewspaper.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
