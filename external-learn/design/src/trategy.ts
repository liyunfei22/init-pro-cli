const formatResult = (isPass: boolean = false, errMsg: string = '') => {
  return {
    result: isPass,
    msg: errMsg
  }
}
interface validInterface {
  isNonEmpty: Function,
  minLength: Function,
  maxLength: Function,
  default: Function
}
const ValidStrategies:validInterface = {
  isNonEmpty: function(val:string = ""){
    console.log(this)
    if(!val) return formatResult(false, "内容不能为空")
  },
  minLength: function(val: string = "", length: string|number = 0) {
    if (typeof length === "string") length = parseInt(length)
    if (val.length < length) {
      return formatResult(false, `内容长度不能小于${length}`)
    }
  },
  maxLength: function (val: string = "", length: string| number) {
    if (typeof length === 'string') length = parseInt(length)
    if (val.length > length) {
      return formatResult(false, `内容长度不能大于${length}`)
    }
  },
  default: function() {
    return formatResult(true)
  }
}
class Validator {
  private _ruleExecuters: Array<any>;
  constructor () {
    this._ruleExecuters = []
  }
  public addRules(value: string = "", rules: Array<string>) {
    this._ruleExecuters = []
    rules.forEach((rule) => {
      const args = rule.split(':')
      const functionName :keyof validInterface = args.shift() as keyof validInterface || "default"
      const ruleFunc = ValidStrategies[functionName].bind(this, value)
      this._ruleExecuters.push({
        func: ruleFunc,
        args
      })
    });
    return this
  }
  public valid () {
    for (let i = 0; i < this._ruleExecuters.length; i++) {
      const res = this._ruleExecuters[i].func.apply(
        this,
        this._ruleExecuters[i].args
      )
      if (res && !res.result) {
        return res
      }
    }
    return formatResult(true)
  }
}
const validator = new Validator()
const res = validator.addRules('123', [
  "isNonEmpty",
  "minLength:5",
  "maxLength:12",
]).valid();
console.log(res)