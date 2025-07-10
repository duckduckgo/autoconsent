import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_patagonia.ca_dn6', ['https://www.patagonia.ca/home/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
