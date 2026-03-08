import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ee-wifi.ee.co.uk_ox1', ['https://ee-wifi.ee.co.uk/public/ee/index.htm'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
