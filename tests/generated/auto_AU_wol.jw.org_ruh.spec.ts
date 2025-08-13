import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_wol.jw.org_ruh', ['https://wol.jw.org/en/wol/h/r1/lp-e'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
