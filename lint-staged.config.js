export default {
  '**/*.ts': () => 'tsc -p tsconfig.json --noEmit',
};