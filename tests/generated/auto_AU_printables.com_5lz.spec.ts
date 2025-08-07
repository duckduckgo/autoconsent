import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_printables.com_5lz', ['https://www.printables.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
