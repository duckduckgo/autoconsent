import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bowenislandmassagetherapy.janeapp.com_sum', ['https://bowenislandmassagetherapy.janeapp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
