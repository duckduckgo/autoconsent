import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jdwetherspoon.com_obg', ['https://www.jdwetherspoon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
