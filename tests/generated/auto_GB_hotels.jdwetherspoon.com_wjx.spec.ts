import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hotels.jdwetherspoon.com_wjx', ['https://hotels.jdwetherspoon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
