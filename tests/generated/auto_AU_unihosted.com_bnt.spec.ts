import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_unihosted.com_bnt', ['https://www.unihosted.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
