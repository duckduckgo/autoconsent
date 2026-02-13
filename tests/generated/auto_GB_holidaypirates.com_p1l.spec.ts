import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_holidaypirates.com_p1l', ['https://www.holidaypirates.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
