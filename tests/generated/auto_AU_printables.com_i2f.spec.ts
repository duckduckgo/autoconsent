import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_printables.com_i2f', ['https://www.printables.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
