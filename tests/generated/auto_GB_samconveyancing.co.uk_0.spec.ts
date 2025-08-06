import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_samconveyancing.co.uk_0', ['https://www.samconveyancing.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
