import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_airbnb.co.uk_6dd', ['https://www.airbnb.co.uk/?_set_bev_on_new_domain=1753867199_EAYzkxY2JmY2YwZD'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
