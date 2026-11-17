import generateCMPTests from '../playwright/runner';

// saving preferences reloads the page, so the self-test cannot run
generateCMPTests('unitedutilities', ['https://www.unitedutilities.com/'], {
    testSelfTest: false,
});

generateCMPTests('unitedutilities', ['https://www.unitedutilities.com/'], {
    testSelfTest: false,
    mobile: true,
});
