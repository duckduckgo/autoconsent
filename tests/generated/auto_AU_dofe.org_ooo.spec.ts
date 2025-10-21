import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_dofe.org_ooo', ['https://www.dofe.org/privacy-statement/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
