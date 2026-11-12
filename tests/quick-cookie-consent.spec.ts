import generateCMPTests from '../playwright/runner';

generateCMPTests('quick-cookie-consent', ['https://www.emvco.com/', 'https://spares4appliances.co.uk/']);

// older plugin version: saving a changed level reloads the page before the self-test runs
generateCMPTests('quick-cookie-consent', ['https://stcuthberts.com/', 'https://cbat.academy/'], {
    testSelfTest: false,
});
