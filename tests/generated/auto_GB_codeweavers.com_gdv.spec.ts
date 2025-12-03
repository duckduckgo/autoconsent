import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_codeweavers.com_gdv', ['https://www.codeweavers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
