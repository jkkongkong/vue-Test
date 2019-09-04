'use strict';

module.exports = {

    types: [
        {
            value: 'wip',
            name: '🚧  wip:      Work in progress'
        },
        {
            value: 'feat',
            name: '✨  feat:     A new feature'
        },
        {
            value: 'fix',
            name: '🐛  fix:      A bug fix'
        },
        {
            value: 'refactor',
            name: '🔧  refactor: A code change that neither fixes a bug nor adds a feature'
        },
        {
            value: 'i18n',
            name: '🌐  i18n:     Text label translation changes only'
        },
        {
            value: 'deps',
            name: '📦  deps:     Dependency bumps only'
        },
        {
            value: 'style',
            name: '🎨  style:    Code style (white-space, formatting, missing semi-colons, etc) changes only'
        },
        {
            value: 'docs',
            name: '📝  docs:     Documentation changes only'
        },
        {
            value: 'test',
            name: '🏁  test:     Add missing tests or correcting existing tests'
        },
        {
            value: 'release',
            name: '🔖  release:  Release a version for building'
        },        
        {
            value: 'revert',
            name: '⏪  revert:   Revert to a commit'
        }
    ],

    scopes: [
        // { name: 'modeler' },
        // { name: 'draw' },
        // { name: 'analyst' },
    ],

    //   scopeOverrides: {
    //     fix: [
    //       {name: 'merge'},
    //       {name: 'style'},
    //       {name: 'e2eTest'},
    //       {name: 'unitTest'},
    //     ],
    //   },

    allowCustomScopes: true,
    allowBreakingChanges: ["feat", "fix"]
};