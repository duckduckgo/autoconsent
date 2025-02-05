import { writeFileSync } from 'fs';
import path from 'path';
import { createGenerator } from 'ts-json-schema-generator';
import { fileURLToPath } from 'url';

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const config = {
    path: path.join(rootDir, 'lib/rules.ts'),
    type: 'AutoConsentCMPRule',
};

const schema = createGenerator(config).createSchema(config.type);
const schemaPath = path.join(rootDir, 'rules/schema.json');
writeFileSync(schemaPath, JSON.stringify(schema, null, 4));
console.log(`Schema generated and saved to ${schemaPath}`);
