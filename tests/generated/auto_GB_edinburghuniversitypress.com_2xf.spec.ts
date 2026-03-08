import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_edinburghuniversitypress.com_2xf', ['https://edinburghuniversitypress.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
