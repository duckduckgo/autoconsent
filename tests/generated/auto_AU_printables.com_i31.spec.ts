import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_printables.com_i31', ['https://www.printables.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
