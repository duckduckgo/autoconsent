import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_irwinmitchell.com_0', ['https://www.irwinmitchell.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
