import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theritzlondon.com_h5x', ['https://www.theritzlondon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
