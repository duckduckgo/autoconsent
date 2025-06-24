import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_visitpeakdistrict.com_0', ['https://visitpeakdistrict.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
