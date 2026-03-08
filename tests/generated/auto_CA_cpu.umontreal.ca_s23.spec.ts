import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cpu.umontreal.ca_s23', ['https://cpu.umontreal.ca/accueil/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
