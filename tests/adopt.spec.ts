import generateCMPTests from '../playwright/runner';

generateCMPTests('adopt', [
    'https://goadopt.io/',
    'https://www.zapimoveis.com.br/',
    'https://www.vivareal.com.br/',
    'https://generated.photos/',
]);
