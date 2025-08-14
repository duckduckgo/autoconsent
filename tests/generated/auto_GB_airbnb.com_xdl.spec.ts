import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_airbnb.com_xdl', ['https://www.airbnb.co.uk/?_set_bev_on_new_domain=1755039670_EANzY4ZWRmMmI4Yj'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
