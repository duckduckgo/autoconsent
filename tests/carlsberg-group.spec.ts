import generateCMPTests from '../playwright/runner';

generateCMPTests('carlsberg-group', [
    'https://feldschloesschen.ch/',
    'https://www.carlsberggroup.com/',
    'https://www.kronenbourg.com/',
    'https://www.teisseire.fr/',
]);
