import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_schoolvakantie-kalender.nl_3pg', ['https://www.schoolvakantie-kalender.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
