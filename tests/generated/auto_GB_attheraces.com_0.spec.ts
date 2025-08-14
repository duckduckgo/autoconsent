import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_attheraces.com_0', ['https://www.attheraces.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
