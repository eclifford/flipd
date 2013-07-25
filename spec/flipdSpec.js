describe("Flipd", function() {
  var features = {
    'feature1': true,
    'feature2': false,
    'feature3': true
  };

  Flipd.init(features);

  it("should execute on callback on enabled feature", function() {
    spy = jasmine.createSpy();
    Flipd.on('feature1', spy);
    expect(spy).toHaveBeenCalled();
  });

  it("should not execute on callback on disabled feature", function() {
    spy = jasmine.createSpy();
    Flipd.on('feature2', spy);
    expect(spy).not.toHaveBeenCalled();
  });

  it("should execute off callback on disabled feature", function() {
    spy = jasmine.createSpy();
    Flipd.off('feature2', spy);
    expect(spy).toHaveBeenCalled();
  });

  it("should not execute off callback on disabled feature", function() {
    spy = jasmine.createSpy();
    Flipd.off('feature1', spy);
    expect(spy).not.toHaveBeenCalled();
  });

  it("should add css classes to body for each enabled feature", function() {
    var $body = $('body');
    expect($body).toHaveClass('fp-feature1');
    expect($body).not.toHaveClass('fp-feature2');
    expect($body).toHaveClass('fp-feature3');
  });

});