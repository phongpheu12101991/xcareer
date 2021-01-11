// b1

let life = () => {
  let foo = (x) => {
    var y = x * 2;
    let bar, baz, bam;
    return (bar = (z) => {
      if (z.length > 3) {
        return z.map(
          (baz = (v) => {
            if (v > 3) return v + y;
            else return baz(v * 4);
          })
        );
      } else {
        var obj = [];
        setTimeout(
          (bam = () => {
            obj.length = 1;
            obj[0] = this.w;
          }),
          100
        );
        return obj;
      }
    });
  };

  var p = foo(2);
  var list1 = [1, 2, 3, 4];
  var list2 = list1.concat(6);
  list1 = p.call({ w: 42 }, list1);
  list2 = p(list2);
  setTimeout(() => {
    console.log(
      list1[0] ===
        list2.reduce((s, v) => {
          return s + v;
        }, 0)
    );
  }, 200);
};

// b2

let bt2 = (n, m) => {
  return Math.floor(m / n) * n;
};

console.log(bt2(3, 10));

// b3

let x = 2;
let fns = [];
(() => {
  let x = 5;
  for (let i = 0; i < x; i++) {}
})();
console.log(x * 2 !== fns[x * 2]);

// b4 ??

// b5
let seats = (nC, nR, c, r) => {
  return (nC - c + 1) * (nR - r);
};

console.log(seats(16, 11, 5, 3));
