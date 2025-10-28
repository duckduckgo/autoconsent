import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ofv.swiss_3iy', ['https://www.ofv.swiss/ostschweizer-fussballverband.aspx'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
