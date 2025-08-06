import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_groningse4daagse.nl_dvf', ['https://www.groningse4daagse.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
