function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b);
  var buffer = [];
  var result = [];
  search(0, target);
  console.log(result);

  function search(startIdx, target) {
    console.log(startIdx,target)
    if (target === 0) return result.push(buffer.slice());
    if (target < 0) return;
    if (startIdx === candidates.length) return;
    buffer.push(candidates[startIdx]);
    search(startIdx, target - candidates[startIdx]);
    buffer.pop();
    search(startIdx + 1, target);
  }
}

combinationSum2([2,3,6,7],7)