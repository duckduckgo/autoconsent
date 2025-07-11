import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_askpython.com_8o8', ['https://www.askpython.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
