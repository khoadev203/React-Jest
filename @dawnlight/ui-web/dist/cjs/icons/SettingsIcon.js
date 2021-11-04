"use strict";

exports.__esModule = true;
exports.SettingsIcon = void 0;

var _SvgIcon = /*#__PURE__*/require("../components/SvgIcon/SvgIcon");

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SettingsIcon = function SettingsIcon(props) {
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon.SvgIcon, props, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.0602 0C12.8132 0 13.6099 0.0628554 14.3292 0.181093C15.3061 0.329298 16.056 1.13213 16.2066 2.17743C16.2478 2.6644 16.5127 3.09505 16.977 3.43061L17.0582 3.4852L17.0959 3.50091L17.1319 3.51942L17.19 3.55843L17.3445 3.6202C17.7272 3.75351 18.1629 3.77864 18.5955 3.6987L18.7805 3.65802L18.9642 3.60451C19.9028 3.24849 20.9411 3.51469 21.6264 4.26601C22.5812 5.39592 23.3631 6.6703 23.8373 7.89841C24.2157 8.79411 23.9163 9.82772 23.123 10.4672C22.6813 10.8544 22.447 11.3773 22.447 12C22.447 12.6399 22.693 13.2018 23.1252 13.5346C23.872 14.1975 24.1484 15.2247 23.7832 16.0885C23.2945 17.3534 22.5603 18.5703 21.6149 19.6886C20.9276 20.4415 19.8173 20.6894 18.8334 20.2736C18.2561 20.0364 17.6438 20.0857 17.1222 20.413C16.5565 20.7679 16.1783 21.308 16.0775 21.9461C15.8483 22.9254 15.1482 23.6766 14.2161 23.818C13.4706 23.9406 12.7317 24 11.9414 24C11.1883 24 10.3915 23.9371 9.67237 23.8189C8.69544 23.6707 7.94556 22.8678 7.79493 21.8226C7.75378 21.3356 7.48881 20.9049 7.02461 20.5694L6.93967 20.5121L6.86966 20.4806L6.81063 20.4406L6.65706 20.3798C6.2743 20.2465 5.83865 20.2214 5.40609 20.3013L5.22107 20.342L5.0374 20.3955C4.0987 20.7515 3.06043 20.4853 2.37516 19.734C1.42028 18.6041 0.638486 17.3297 0.164271 16.1016C-0.214204 15.2058 0.0852819 14.1723 0.878532 13.5328C1.32024 13.1456 1.55456 12.6227 1.55456 12C1.55456 11.4183 1.35123 10.9011 1.00205 10.5723L0.892981 10.4794C0.0852819 9.82772 -0.214204 8.79411 0.158975 7.91151C0.647641 6.64661 1.38184 5.4297 2.32732 4.31142C3.01454 3.55847 4.12485 3.31058 5.10871 3.72639C5.68604 3.9636 6.29832 3.91431 6.81997 3.58698C7.38563 3.23202 7.7638 2.69194 7.85741 2.09212C8.00542 1.07046 8.76006 0.326322 9.78545 0.181998C10.531 0.0594728 11.2698 0 12.0602 0ZM12.0007 2.02868C11.3752 2.02868 10.7493 2.08479 10.131 2.19557C10.0483 2.21188 9.98935 2.27974 9.96314 2.40787C9.76338 3.58996 9.03425 4.64211 7.96879 5.29875C6.9086 5.95215 5.5709 6.04128 4.40168 5.58902C4.24029 5.54923 4.08366 5.5724 4.03177 5.62214C3.25513 6.49738 2.62266 7.55616 2.21209 8.65458C2.18661 8.7174 2.19894 8.78152 2.2618 8.84724L2.3186 8.89684C3.21072 9.64117 3.73071 10.7728 3.73071 12C3.73071 13.2768 3.23538 14.3933 2.347 15.0774C2.2207 15.202 2.18887 15.2961 2.21209 15.3454C2.68679 16.5157 3.32294 17.5707 4.1132 18.4632C4.1445 18.5044 4.23757 18.5286 4.34494 18.5051L4.41069 18.4851C4.90821 18.3011 5.4244 18.2215 5.99969 18.2215C6.60096 18.2215 7.19968 18.3527 7.81153 18.6214L7.8765 18.6553L8.07458 18.7787C8.09554 18.7912 8.11973 18.8046 8.1585 18.8257C9.15398 19.4802 9.82126 20.4671 10.0199 21.5776C10.0488 21.7203 10.1078 21.7881 10.1825 21.8029C10.8088 21.9152 11.4346 21.9714 12.0602 21.9714C12.6858 21.9714 13.3116 21.9152 13.9299 21.8045C14.0126 21.7881 14.0716 21.7203 14.0978 21.5922C14.2976 20.4101 15.0268 19.3579 16.0922 18.7013C17.1523 18.0478 18.4901 17.9587 19.6593 18.411C19.8207 18.4507 19.9773 18.4276 20.0292 18.3778C20.8059 17.5026 21.4383 16.4439 21.8646 15.3107C21.8721 15.2961 21.8403 15.202 21.7423 15.1032C20.8503 14.3588 20.3303 13.2272 20.3303 12C20.3303 10.7232 20.8256 9.60674 21.714 8.92259C21.8403 8.79806 21.8721 8.7039 21.8489 8.65458C21.3742 7.48433 20.738 6.42934 19.9478 5.53677C19.9165 5.49562 19.8234 5.47144 19.716 5.4949L19.6503 5.51495C18.597 5.90441 17.344 5.85145 16.2495 5.37859L16.1845 5.34473L15.9864 5.22126C15.9654 5.20882 15.9413 5.19536 15.9025 5.17427C14.907 4.51986 14.2398 3.53285 14.0459 2.44363C14.0122 2.3107 13.928 2.20692 13.8785 2.19707C13.2522 2.08479 12.6264 2.02868 12.0007 2.02868ZM12.0007 7.55264C14.5056 7.55264 16.5109 9.53003 16.5109 12C16.5109 14.47 14.5056 16.4474 12.0007 16.4474C9.49588 16.4474 7.49068 14.47 7.49068 12C7.49068 9.53003 9.49588 7.55264 12.0007 7.55264ZM12.0007 9.18218C10.4058 9.18218 9.14321 10.4273 9.14321 12C9.14321 13.552 10.444 14.8178 12.0007 14.8178C13.5575 14.8178 14.8583 13.552 14.8583 12C14.8583 10.4273 13.5957 9.18218 12.0007 9.18218Z"
  }));
};

exports.SettingsIcon = SettingsIcon;
//# sourceMappingURL=SettingsIcon.js.map