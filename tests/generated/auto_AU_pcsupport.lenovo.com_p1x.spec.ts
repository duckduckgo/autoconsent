import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pcsupport.lenovo.com_p1x', ['https://pcsupport.lenovo.com/au/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
