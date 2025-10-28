import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_afvalscheidingswijzer.nl_hev', ['https://www.afvalscheidingswijzer.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
