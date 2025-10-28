import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_legroupemaurice.com_tkv', ['https://www.legroupemaurice.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
