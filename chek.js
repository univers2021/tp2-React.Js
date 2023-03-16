let v1 = [1, 2, -1, -2];
let v2 = [1, 2, 1, 2];
let ps = 0;

for (let i = 0; i < v1.length; i++) {
  ps += v1[i] * v2[i];
}

if (ps == 0) {
  console.log("octogonal");
} else console.log("non octogonal");
