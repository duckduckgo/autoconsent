import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theatresonline.com_8gj', ['https://www.theatresonline.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
