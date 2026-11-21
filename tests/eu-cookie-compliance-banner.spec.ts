import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', [
    'https://www.walthamforest.gov.uk/',
    'https://www.mannheim.de/',
    'https://mundraub.org/',
    'https://www.aa.org/',
]);
