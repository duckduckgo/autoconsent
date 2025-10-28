import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_na.nokiantyres.com_fzo', ['https://na.nokiantyres.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
