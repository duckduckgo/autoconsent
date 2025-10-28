import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_help.uis.cam.ac.uk_36j', ['https://help.uis.cam.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
