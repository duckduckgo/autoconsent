import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_easyliveauction.com_qsn', ['https://www.easyliveauction.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
