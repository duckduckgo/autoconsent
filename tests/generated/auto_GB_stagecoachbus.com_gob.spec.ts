import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stagecoachbus.com_gob', ['https://www.stagecoachbus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
