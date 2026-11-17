import generateCMPTests from '../playwright/runner';

generateCMPTests('abebooks', [
    'https://www.abebooks.it/',
    'https://www.abebooks.de/',
    'https://www.abebooks.fr/',
    'https://www.abebooks.co.uk/',
    'https://www.zvab.com/',
    'https://www.iberlibro.com/',
]);
