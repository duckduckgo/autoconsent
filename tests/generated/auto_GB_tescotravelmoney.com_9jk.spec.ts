import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tescotravelmoney.com_9jk', ['https://www.tescotravelmoney.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
