import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_falmouthpacket.co.uk_63c', ['https://www.falmouthpacket.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
