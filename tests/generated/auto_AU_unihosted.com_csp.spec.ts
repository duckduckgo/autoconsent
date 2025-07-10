import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_unihosted.com_csp', ['https://www.unihosted.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
