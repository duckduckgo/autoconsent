import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_allpasstrust.com_56x', ['https://www.allpasstrust.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
