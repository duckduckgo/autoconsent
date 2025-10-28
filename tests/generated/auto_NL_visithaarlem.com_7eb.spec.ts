import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visithaarlem.com_7eb', ['https://www.visithaarlem.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
