import generateCMPTests from '../playwright/runner';

generateCMPTests('tna-cookie-banner', [
    'https://www.nationalarchives.gov.uk/',
    'https://caselaw.nationalarchives.gov.uk/',
    'https://blog.nationalarchives.gov.uk/',
    'https://design-system.nationalarchives.gov.uk/',
]);
