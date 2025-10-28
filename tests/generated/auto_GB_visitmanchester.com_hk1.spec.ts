import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_visitmanchester.com_hk1', ['https://www.visitmanchester.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
