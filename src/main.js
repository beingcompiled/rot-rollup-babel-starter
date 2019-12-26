import _ from 'lodash';
import { Display } from "./../lib/rot/index.js";

let o = {
	width: 100,
	height: 50
}
let d = new Display(o);
document.body.appendChild(d.getContainer());

for (let i=0; i<o.width; i++) {
	for (let j=0; j<o.height; j++) {
		if (!i || !j || i+1 == o.width || j+1 == o.height) {
			d.draw(i, j, "#", "red");
		} else {
			d.draw(i, j, ".", "#666");
		}
	}
}
d.draw(o.width >> 1, o.height >> 1, "@", "goldenrod");

//test
const arr = _.concat([1, 2, 3], 4, [5]);
console.log('hello world', arr);
