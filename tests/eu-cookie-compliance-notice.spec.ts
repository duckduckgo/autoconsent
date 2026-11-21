import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-notice', [
    'http://sanita.regione.abruzzo.it/',
    'https://www.polifvg.it/',
    'https://www.osc.ca/',
    'https://www.statistikportal.de/',
    'https://www.croydon.gov.uk/',
    'https://www.canalextremadura.es/',
]);
