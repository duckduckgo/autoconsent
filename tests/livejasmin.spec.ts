import generateCMPTests from '../playwright/runner';

generateCMPTests('livejasmin', ['https://www.livejasmin.com/en/girls/?forcedesktop=1'], {
    testOptIn: false,
});

generateCMPTests('livejasmin', ['https://www.livejasmin.com/'], {
    testOptIn: false,
    // the mobile site reloads the page after saving the choice
    testSelfTest: false,
    mobile: true,
});
