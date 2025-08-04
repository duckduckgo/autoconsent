import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_askpython.com_3e7', ['https://www.askpython.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
