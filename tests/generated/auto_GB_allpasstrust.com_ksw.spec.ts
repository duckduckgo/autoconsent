import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_allpasstrust.com_ksw', ['https://www.allpasstrust.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
