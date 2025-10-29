import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_osborneclarke.com_z7n', ['https://www.osborneclarke.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
