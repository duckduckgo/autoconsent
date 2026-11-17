import generateCMPTests from '../playwright/runner';

generateCMPTests('silktide', [
    'https://www.bukowskis.com/',
    'https://www.healthday.com/',
    'https://www.vejdirektoratet.dk/',
    'https://www.northumberland.gov.uk/',
    'https://www.etsmtl.ca/',
]);
