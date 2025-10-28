import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_checkyourfact.com_vgg', ['https://checkyourfact.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
