import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_creativebloq.com_e2b', ['https://www.creativebloq.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
