describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    expect(split([2, 3, 4, 7])).toEqual([
      [2, 3],
      [4, 7],
    ]);
  });

  describe('Merge function', function () {
    it('is able to merge two sorted arrays into one sorted array', function () {
      expect(merge([5, 8, 11], [3, 7, 10])).toEqual([3, 5, 7, 8, 10, 11]);
    });

    it('is able to merge and sort', function () {
      expect(mergeSort([5, 8, 11, 3, 7, 9])).toEqual([3, 5, 7, 8, 9, 11]);
    });
  });
});
