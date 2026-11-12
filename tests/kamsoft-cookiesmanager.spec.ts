import generateCMPTests from '../playwright/runner';

generateCMPTests('kamsoft-cookiesmanager', [
    'https://ktomalek.pl/',
    'https://bloz.pl/',
    'https://www.pharmind.pl/',
    'https://www.kamsoft.pl/',
]);
