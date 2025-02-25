module.exports = {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-scss"],
  rules: {
    "no-descending-specificity": null,
    "no-empty-source": null,
    "no-invalid-position-at-import-rule": null,
    "scss/load-no-partial-leading-underscore": null,
    "scss/dollar-variable-pattern": null,
    "scss/at-extend-no-missing-placeholder": null,
    "scss/no-global-function-names": null,
  },
};
