import generateCMPTests from '../playwright/runner';

generateCMPTests('mkdocs-material', [
    'https://docs.lightburnsoftware.com/1.7/',
    'https://tomasvotava.github.io/fastapi-sso/',
    'https://geek-cookbook.funkypenguin.co.nz/',
]);
