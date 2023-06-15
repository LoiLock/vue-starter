module.exports = {
  "extends": [
    "stylelint-scss",
    'stylelint-config-recommended-vue/scss',
    "stylelint-config-recommended",
    "stylelint-config-twbs-bootstrap",
  ],
  "overrides": [
    {
      "files": ["**/*.scss"],
      "customSyntax": "postcss-scss",
      "rules": {
        "at-rule-no-unknown": null
      }
    },
  ],
  "ignoreFiles": [
    "**/_variables.scss",
    "**/*.tsx",
    "**/*.ts",
    "**/*.json"
  ],
  "rules": {
    "indentation": 2,
    "color-named": "never",
    "at-rule-no-unknown": null,
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "string-quotes": "single",
    "stylistic/string-quotes": 'single',
    "value-list-comma-newline-after": null,
    "value-list-comma-space-after": "always-single-line",
    "shorthand-property-no-redundant-values": true,
    "selector-max-compound-selectors": 6
  }
}
