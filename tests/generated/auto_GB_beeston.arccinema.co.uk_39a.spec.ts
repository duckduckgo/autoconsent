import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_beeston.arccinema.co.uk_39a', ['https://beeston.arccinema.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
