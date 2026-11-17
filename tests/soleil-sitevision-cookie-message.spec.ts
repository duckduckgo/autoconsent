import generateCMPTests from '../playwright/runner';

generateCMPTests('soleil-sitevision-cookie-message', [
    'https://osteraker.se/',
    'https://moragymnasium.se/',
    'https://ssam.se/',
    'https://vrtj.se/',
]);
