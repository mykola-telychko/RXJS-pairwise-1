import { pairwise, take } from 'rxjs/operators';
import { interval, from } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/combination/pairwise

// expl 1
//Returns: [0,1], [1,2], [2,3], [3,4], [4,5]
// interval(1000).pipe(pairwise(), take(5)).subscribe(console.log);

// expl 2
// Create an observable that emits numbers from 1 to 5 every second
const src$ = from([1, 2, 3, 4, 5]);

// Apply the pairwise operator
src$.pipe(pairwise()).subscribe((pairVal) => {
  console.log(`Pair: ${pairVal[0]} -> ${pairVal[1]}`);
});
