import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_forums.moneysavingexpert.com_0ut', ['https://forums.moneysavingexpert.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
