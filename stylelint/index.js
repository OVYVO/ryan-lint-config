module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-rational-order"],
  rules: {
    "block-no-empty": true,
    "rule-empty-line-before": "never",
    "unit-allowed-list": ["px", "vw", "vh", "%"],
  },
  plugins: ["stylelint-order", "stylelint-config-rational-order/plugin"],
};
