import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_epcadvisor.co.uk_j3m', ['https://epcadvisor.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
