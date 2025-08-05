import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_airbnb.ca_d52', ['https://www.airbnb.ca/?locale=en&_set_bev_on_new_domain=1753877525_EAOGMyZGZlZTYwMz'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
