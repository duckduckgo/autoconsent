import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lloydsbankinggroup.com_0', ['https://www.lloydsbankinggroup.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
