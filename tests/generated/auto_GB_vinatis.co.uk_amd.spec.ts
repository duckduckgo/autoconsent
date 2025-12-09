import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vinatis.co.uk_amd', ['https://www.vinatis.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
