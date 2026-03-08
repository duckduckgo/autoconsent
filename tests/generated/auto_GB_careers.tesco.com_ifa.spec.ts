import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_careers.tesco.com_ifa', ['https://careers.tesco.com/en_GB/careers'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
