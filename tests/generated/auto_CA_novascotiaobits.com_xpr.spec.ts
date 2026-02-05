import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_novascotiaobits.com_xpr', ['https://www.novascotiaobits.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
