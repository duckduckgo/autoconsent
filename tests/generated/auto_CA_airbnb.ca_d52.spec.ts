import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_airbnb.ca_d52', ['https://www.airbnb.ca/?locale=en&_set_bev_on_new_domain=1755050444_EAYjc3NTdlYjA3YW'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
