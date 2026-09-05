import generateCMPTests from '../playwright/runner';

generateCMPTests('ndl-go-jp', [
    'https://ndlsearch.ndl.go.jp/imagebank',
    'https://www.ndl.go.jp/',
    'https://rnavi.ndl.go.jp/',
    'https://dl.ndl.go.jp/',
]);
