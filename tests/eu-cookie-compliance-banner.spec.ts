import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', [
    'https://healthcare.utah.edu/',
    'https://www.guysandstthomas.nhs.uk/',
    'https://karriere.polizei.nrw/',
    'https://www.kurvekriegen.nrw.de/',
]);
