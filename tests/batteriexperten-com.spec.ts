import generateCMPTests from '../playwright/runner';

generateCMPTests('batteriexperten.com', [
    'https://www.batteriexperten.com/sv',
    'https://www.batteriexperten.com/no',
    'https://www.teknikdelar.se/',
    'https://www.teknikkdeler.no/',
    'https://www.teknikdele.dk/',
    'https://www.tekniikkaosat.fi/',
]);
