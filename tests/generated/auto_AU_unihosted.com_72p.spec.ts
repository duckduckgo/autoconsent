import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_unihosted.com_72p', ['https://www.unihosted.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
