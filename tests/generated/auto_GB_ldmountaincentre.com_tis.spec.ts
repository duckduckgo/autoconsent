import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ldmountaincentre.com_tis', ['https://www.ldmountaincentre.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
