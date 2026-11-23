import generateCMPTests from '../playwright/runner';

generateCMPTests('opencart-google-consent-v2', [
    'https://www.stoveworlduk.co.uk/',
    'https://www.bbqgaslondon.co.uk/',
    'https://www.gardenoasis.co.uk/',
    'https://allikestore.com/',
]);
