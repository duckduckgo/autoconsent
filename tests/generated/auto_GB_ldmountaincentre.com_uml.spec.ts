import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ldmountaincentre.com_uml', ['https://www.ldmountaincentre.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
