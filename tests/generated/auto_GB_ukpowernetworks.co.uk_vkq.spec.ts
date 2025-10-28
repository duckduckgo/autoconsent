import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ukpowernetworks.co.uk_vkq', ['https://www.ukpowernetworks.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
