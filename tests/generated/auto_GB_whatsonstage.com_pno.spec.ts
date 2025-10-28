import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_whatsonstage.com_pno', ['https://www.whatsonstage.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
