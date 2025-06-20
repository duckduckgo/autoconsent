import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_honor.com_0', ['https://www.honor.com/uk/?host=honor.com'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
