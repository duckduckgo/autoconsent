import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_delicaforum.com_ye7', ['https://delicaforum.com/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
