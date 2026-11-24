import generateCMPTests from '../playwright/runner';

generateCMPTests('swedbank-ui-cookie-consent', ['https://www.swedbank.lt/', 'https://www.swedbank.ee/', 'https://www.swedbank.lv/']);
