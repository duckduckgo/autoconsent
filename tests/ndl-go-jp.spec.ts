import generateCMPTests from '../playwright/runner';

generateCMPTests('ndl-go-jp', [
    'https://ndlsearch.ndl.go.jp/imagebank',
    'https://www.ndl.go.jp/',
    'https://www.ndl.go.jp/en/',
    'https://dl.ndl.go.jp/',
]);
