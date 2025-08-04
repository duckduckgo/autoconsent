import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pcsupport.lenovo.com_8jm', ['https://pcsupport.lenovo.com/au/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
