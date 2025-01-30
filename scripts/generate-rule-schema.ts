import path from 'path';
import { writeFileSync } from 'fs';
import { createGenerator } from 'ts-json-schema-generator';

const config = {
    path: path.join(__dirname, '../lib/rules.ts'),
    type: 'AutoConsentCMPRule',
};

const schema = createGenerator(config).createSchema(config.type);
const schemaPath = path.join(__dirname, '../rules/schema.json');

writeFileSync(schemaPath, JSON.stringify(schema, null, 2));
console.log(`Schema generated and saved to ${schemaPath}`);
