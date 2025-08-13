import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_erc.europa.eu_jem', ['https://erc.europa.eu/homepage'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
