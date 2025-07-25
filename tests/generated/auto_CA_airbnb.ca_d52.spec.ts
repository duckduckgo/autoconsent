import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_airbnb.ca_d52', ['https://www.airbnb.ca/?locale=en&_set_bev_on_new_domain=1753447442_EAZjk3MTI2NTlkNj'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
