exports.assertion = function(selector, count) {
  this.message =  `Testing if the element <${selector}> has count greater than ${count}`;
  
  this.expected = count;
  
  this.value = function(result) {
    return result
  };
  
  this.pass = function(value) {
    return value > this.expected
  };

  this.command = function() {
    return this.api.execute(function(selector) {
      return document.querySelectorAll(selector).length;
    }, [selector], function(res) {
      cb.call(this, res.value);
    }.bind(this));
  };
};