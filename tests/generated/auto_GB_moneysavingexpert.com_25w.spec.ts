import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_moneysavingexpert.com_25w', ['https://www.moneysavingexpert.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
