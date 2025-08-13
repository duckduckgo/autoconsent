import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_visitstockholm.com_66k', ['https://www.visitstockholm.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
