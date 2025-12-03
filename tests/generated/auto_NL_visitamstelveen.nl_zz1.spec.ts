import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_visitamstelveen.nl_zz1', ['https://www.visitamstelveen.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
