import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_folio-org.atlassian.net_pap', ['https://folio-org.atlassian.net/wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
