import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dunfermlinepress.com_qza', ['https://www.dunfermlinepress.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
