import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_printables.com_ic7', ['https://www.printables.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
