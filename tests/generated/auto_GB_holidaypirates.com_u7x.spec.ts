import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_holidaypirates.com_u7x', ['https://www.holidaypirates.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
