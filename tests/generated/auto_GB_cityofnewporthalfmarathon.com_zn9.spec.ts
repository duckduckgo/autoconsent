import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cityofnewporthalfmarathon.com_zn9', ['https://cityofnewporthalfmarathon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
