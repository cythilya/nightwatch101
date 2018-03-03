exports.assertion = function (selector, count) {
  this.message =  `Testing if the element <${selector}> has count: ${count}`;
  
  this.expected = count;
  
  this.pass = function(val) {
    return val === this.expected;
  }
  
  this.value = function(res) {
    return res.value;
  }
  
  this.command = function(cb) {
    return this.api.execute(function(selector) {
      return document.querySelectorAll(selector).length;
    }, [selector], function(res) {
      cb.call(this, res);
    }.bind(this));
  }
}