import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_creativebloq.com_27m', ['https://www.creativebloq.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
