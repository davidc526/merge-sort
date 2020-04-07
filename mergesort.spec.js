describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    expect(split([2, 3, 4, 7])).toEqual([
      [2, 3],
      [4, 7],
    ]);
  });

  describe('Merge function', function () {
    it('is able to merge two sorted arrays into one sorted array', function () {
      expect(merge([5, 7], [3, 8])).toEqual([3, 5, 7, 8]);
    });
  });
});
