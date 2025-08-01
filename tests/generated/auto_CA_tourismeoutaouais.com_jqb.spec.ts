import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tourismeoutaouais.com_jqb', ['https://www.tourismeoutaouais.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
