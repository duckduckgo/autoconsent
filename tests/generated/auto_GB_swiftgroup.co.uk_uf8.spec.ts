import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_swiftgroup.co.uk_uf8', ['https://www.swiftgroup.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
