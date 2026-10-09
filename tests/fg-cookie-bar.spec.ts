import generateCMPTests from '../playwright/runner';

generateCMPTests('fg-cookie-bar', [
    'https://doarmady.mo.gov.cz/',
    'https://www.fg.cz/',
    'https://www.arriva.cz/',
    'https://www.senesi.cz/',
    'https://www.skolashrou.cz/',
]);
