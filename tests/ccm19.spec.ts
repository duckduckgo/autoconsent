import generateCMPTests from '../playwright/runner';

// www.munich.travel also uses CCM19, but only serves the banner to residential IPs, so it is not in this list.
generateCMPTests('ccm19', ['https://www.wag.de/', 'https://www.ccm19.de/en/', 'https://www.papoo.de/'], {
    testOptIn: false,
});
