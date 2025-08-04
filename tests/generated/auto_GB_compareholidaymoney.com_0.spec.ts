import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_compareholidaymoney.com_0', ['https://www.compareholidaymoney.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
