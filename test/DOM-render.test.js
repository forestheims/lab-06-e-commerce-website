import { renderMetal } from '../render.js';
import { metals } from '../data/metals.js';

const test = QUnit.test;

test('renderMetal() function should return div with name, image, description, protons, and price appended to it', (expect) => {
    const expected = '<div class="metal-div"><h2>Aluminium</h2><img class="metal-image" src="./assets/aluminium.jpg"><p>Lower density than other common metals</p><h3>Atomic Number: 13</h3><p>Cost per Kilogram: $15</p><button class="add-button" id="6">Add to Cart</button></div>';
    
    const actual = renderMetal(metals[5]).outerHTML;

    expect.equal(actual, expected);
});