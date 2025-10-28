import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ray-ban.com_581', ['https://www.ray-ban.com/canada/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
