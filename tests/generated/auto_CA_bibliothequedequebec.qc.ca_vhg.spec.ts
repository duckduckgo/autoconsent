import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bibliothequedequebec.qc.ca_vhg', ['https://www.bibliothequedequebec.qc.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
