import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_avecuncourtier.com_2m3', ['https://avecuncourtier.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
