import generateCMPTests from '../playwright/runner';

generateCMPTests('abebooks', [
    'https://www.zvab.com/VARIETIES-JAPANESE-PRINT-YOSHIDA-Toshi/15454199463/bd',
    'https://www.iberlibro.com/',
    'https://www.abebooks.co.uk/',
]);
