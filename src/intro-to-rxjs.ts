import { Observable, map, firstValueFrom } from 'rxjs'; //firstValueFrom use with Promise


function getValue () {
    return new Promise((res, rej) => {  // resolve, reject
        setTimeout(() => {
            res('TEST')
        }, 2000)
    });   
}

function getValue2(cb: (...arg: any[]) => void) {
    setTimeout(() => {
        cb('Test');   // cb=== callback
    }, 2000)
}
  //cps
getValue2 (function (value) { console.log(value);});
        // горното е с    а даолното са промисите 


    /////// this is sync ==> s promosite, 
[1] .map(function(x) {return x + 1}) 
    .map(function (x) { return x * x;});

// promise chain
//getValue()
// this is async
Promise.resolve(1)
.then(function(value) {console.log(value);})
.then()
.then();

////////////////////////////////



[1, 2, 3]  // this observere sihrono 
    .map(function(x) {return x + 1}) 
    .map(function (x) { return x * x;});


const o = new Observable(observer => {
    observer.next(100);
    observer.next(200);
    observer.next(300);
    observer.complete();

    o.subscribe(console.log)
})



function interval (intervalValue: number = 0) {
  return new Observable<number>(observer => {
    let counter = 0;
    const timerId = setInterval (() => {
      observer.error(new Error('ggghg'))
      observer.next(counter++)
      observer.complete()
    }, intervalValue);

    return () => {
      clearInterval(timerId)
    };
  });
}

const stream$ = interval(5000).pipe(
map(x => x+1),
map(x => x+1),
map(x => x+1),

);
setTimeout(() => {
  const sub = stream$.subscribe({
    next: (x) => console.log(x),
    error: (err) => console.error(err),
    complete: () => console.log('Observable completed')
  });

  setTimeout(() => {
    sub.unsubscribe();
  }, 1000)
}, 3000);


