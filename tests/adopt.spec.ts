import generateCMPTests from '../playwright/runner';

// reject button in GDPR regions, "Do not sell" button in the US
generateCMPTests('adopt', ['https://www.bling.com.br/', 'https://www.gigasena.com.br/']);

// does not store adoptConsentMode, so the self-test cannot check the choice
generateCMPTests('adopt', ['https://exame.com/'], {
    testSelfTest: false,
});

// no banner in GB/DE
generateCMPTests('adopt', ['https://goadopt.io/'], {
    onlyRegions: ['US'],
});
