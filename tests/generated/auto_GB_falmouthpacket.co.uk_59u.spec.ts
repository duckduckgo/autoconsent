import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_falmouthpacket.co.uk_59u', ['https://www.falmouthpacket.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
