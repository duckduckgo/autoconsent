import generateCMPTests from '../playwright/runner';

generateCMPTests('funding-choices-amp', ['http://amp.canlitvizle.tv/', 'https://www.economynext.com/'], {
    onlyRegions: ['GB', 'FR', 'NL', 'PL'],
});
