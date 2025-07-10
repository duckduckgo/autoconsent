import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hollywoodreporter.com_47q', ['https://www.hollywoodreporter.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
