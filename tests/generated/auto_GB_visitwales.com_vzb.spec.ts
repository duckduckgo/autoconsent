import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_visitwales.com_vzb', ['https://www.visitwales.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
