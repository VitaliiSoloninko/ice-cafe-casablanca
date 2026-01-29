import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/out-tsc'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            // Apps can import from features, ui, data-access, domain, utils
            {
              sourceTag: 'type:app',
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:ui',
                'type:data-access',
                'type:domain',
                'type:util',
                'type:assets',
              ],
            },
            // Features can import from ui, data-access, domain, utils
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'type:data-access',
                'type:domain',
                'type:util',
                'type:assets',
              ],
            },
            // UI can import from domain and utils only
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: ['type:domain', 'type:util'],
            },
            // Data-access can import from domain and utils
            {
              sourceTag: 'type:data-access',
              onlyDependOnLibsWithTags: ['type:domain', 'type:util'],
            },
            // Domain should not depend on anything (bottom of dependency tree)
            {
              sourceTag: 'type:domain',
              onlyDependOnLibsWithTags: [],
            },
            // Utils should not depend on anything
            {
              sourceTag: 'type:util',
              onlyDependOnLibsWithTags: ['type:domain'],
            },
            // Platform specific constraints
            {
              sourceTag: 'platform:ionic',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:mobile', '*'],
              notDependOnLibsWithTags: ['platform:browser', 'scope:web'],
            },
            {
              sourceTag: 'platform:browser',
              onlyDependOnLibsWithTags: ['scope:shared', 'scope:web', '*'],
              notDependOnLibsWithTags: ['platform:ionic', 'scope:mobile'],
            },
            // E2E tests can import anything
            {
              sourceTag: 'type:e2e',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
