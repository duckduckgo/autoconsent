import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_careers.capgemini.com_s51', ['https://careers.capgemini.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
