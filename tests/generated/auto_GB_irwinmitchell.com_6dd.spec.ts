import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_irwinmitchell.com_6dd', ['https://www.irwinmitchell.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
