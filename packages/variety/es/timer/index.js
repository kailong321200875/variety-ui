function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
var ViewTimer = (_dec = customElement("view-timer"), _dec2 = property(), _dec3 = state(), _dec4 = state(), _dec5 = state(), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_LitElement) {
  _inherits(ViewTimer, _LitElement);
  var _super = _createSuper(ViewTimer);
  function ViewTimer() {
    var _this;
    _classCallCheck(this, ViewTimer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _initializerDefineProperty(_assertThisInitialized(_this), "duration", _descriptor, _assertThisInitialized(_this));
    _initializerDefineProperty(_assertThisInitialized(_this), "end", _descriptor2, _assertThisInitialized(_this));
    _initializerDefineProperty(_assertThisInitialized(_this), "remaining", _descriptor3, _assertThisInitialized(_this));
    _initializerDefineProperty(_assertThisInitialized(_this), "count", _descriptor4, _assertThisInitialized(_this));
    return _this;
  }
  _createClass(ViewTimer, [{
    key: "render",
    value: function render() {
      var remaining = this.remaining,
        running = this.running;
      var min = Math.floor(remaining / 60000);
      var sec = pad(min, Math.floor(remaining / 1000 % 60));
      var hun = pad(true, Math.floor(remaining % 1000 / 10));
      return html(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      ", " ", "\n      <footer>\n        ", "\n        <span @click=", ">\u91CD\u7F6E</span>\n      </footer>\n    "])), this.count, min ? "".concat(min, ":").concat(sec) : "".concat(sec, ".").concat(hun), remaining === 0 ? "" : running ? html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<span @click=", ">\u6682\u505C</span>"])), this.pause) : html(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<span @click=", ">\u5F00\u59CB/\u7EE7\u7EED</span>"])), this.start), this.reset);
    }
  }, {
    key: "start",
    value: function start() {
      this.count++;
      console.log(this.count);
      this.end = Date.now() + this.remaining;
      this.tick();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.end = null;
    }
  }, {
    key: "reset",
    value: function reset() {
      var running = this.running;
      this.remaining = this.duration * 1000;
      this.end = running ? Date.now() + this.remaining : null;
    }
  }, {
    key: "tick",
    value: function tick() {
      var _this2 = this;
      if (this.running) {
        this.remaining = Math.max(0, this.end - Date.now());
        requestAnimationFrame(function () {
          return _this2.tick();
        });
      }
    }
  }, {
    key: "running",
    get: function get() {
      return this.end && this.remaining;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ViewTimer.prototype), "connectedCallback", this).call(this);
      this.reset();
    }
  }]);
  return ViewTimer;
}(LitElement), _defineProperty(_class3, "styles", css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    :host {\n      display: inline-block;\n      min-width: 4em;\n      text-align: center;\n      padding: 0.2em;\n      margin: 0.2em 0.1em;\n    }\n    footer {\n      user-select: none;\n      font-size: 0.6em;\n    }\n  "])))), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 60;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "end", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "remaining", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "count", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class2)) || _class);
function pad(pad, val) {
  return pad ? String(val).padStart(2, "0") : val;
}
export default ViewTimer;