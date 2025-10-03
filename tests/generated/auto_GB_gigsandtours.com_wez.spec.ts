import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gigsandtours.com_wez', ['https://www.gigsandtours.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
