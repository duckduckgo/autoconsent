import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_community.altera.com_bfa', ['https://community.altera.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
