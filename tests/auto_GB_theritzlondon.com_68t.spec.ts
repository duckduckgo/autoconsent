import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_theritzlondon.com_68t', ['https://www.theritzlondon.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
