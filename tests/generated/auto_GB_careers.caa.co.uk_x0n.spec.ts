import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.caa.co.uk_x0n', ['https://careers.caa.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
