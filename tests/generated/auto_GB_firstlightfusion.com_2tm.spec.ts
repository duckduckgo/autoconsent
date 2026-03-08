import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_firstlightfusion.com_2tm', ['https://firstlightfusion.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
