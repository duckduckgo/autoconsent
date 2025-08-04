import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_printables.com_n3c', ['https://www.printables.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
