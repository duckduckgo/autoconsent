import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_directdoors.com_thf', ['https://www.directdoors.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
