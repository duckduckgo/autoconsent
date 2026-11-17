import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-pref-form', [
    'https://www.bethchatto.co.uk/',
    'https://www.smartseal.co.uk/',
    'https://www.tarmaseal.co.uk/',
    'https://www.powertoolmate.co.uk/',
]);
