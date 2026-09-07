import generateCMPTests from '../playwright/runner';

generateCMPTests('rdc-concents', [
    'https://www.lemonjelly.com/en/',
    'https://www.mascarilha.pt/pt/',
    'https://www.maxmat.pt/pt/',
    'https://www.jom.pt/pt/',
    // modal (rdc-layout-1) variant
    'https://www.decenio.com/pt/',
]);
