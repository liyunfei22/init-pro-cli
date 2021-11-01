"use strict";
var formatResult = function (isPass, errMsg) {
    if (isPass === void 0) { isPass = false; }
    if (errMsg === void 0) { errMsg = ''; }
    return {
        result: isPass,
        msg: errMsg
    };
};
var ValidStrategies = {
    isNonEmpty: function (val) {
        if (val === void 0) { val = ""; }
        console.log(this);
        if (!val)
            return formatResult(false, "内容不能为空");
    },
    minLength: function (val, length) {
        if (val === void 0) { val = ""; }
        if (length === void 0) { length = 0; }
        if (typeof length === "string")
            length = parseInt(length);
        if (val.length < length) {
            return formatResult(false, "\u5185\u5BB9\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E" + length);
        }
    },
    maxLength: function (val, length) {
        if (val === void 0) { val = ""; }
        if (typeof length === 'string')
            length = parseInt(length);
        if (val.length > length) {
            return formatResult(false, "\u5185\u5BB9\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E" + length);
        }
    },
    default: function () {
        return formatResult(true);
    }
};
var Validator = /** @class */ (function () {
    function Validator() {
        this._ruleExecuters = [];
    }
    Validator.prototype.addRules = function (value, rules) {
        var _this = this;
        if (value === void 0) { value = ""; }
        this._ruleExecuters = [];
        rules.forEach(function (rule) {
            var args = rule.split(':');
            var functionName = args.shift() || "default";
            var ruleFunc = ValidStrategies[functionName].bind(_this, value);
            _this._ruleExecuters.push({
                func: ruleFunc,
                args: args
            });
        });
        return this;
    };
    Validator.prototype.valid = function () {
        for (var i = 0; i < this._ruleExecuters.length; i++) {
            var res_1 = this._ruleExecuters[i].func.apply(this, this._ruleExecuters[i].args);
            if (res_1 && !res_1.result) {
                return res_1;
            }
        }
        return formatResult(true);
    };
    return Validator;
}());
var validator = new Validator();
var res = validator.addRules('123', [
    "isNonEmpty",
    "minLength:5",
    "maxLength:12",
]).valid();
console.log(res);
