import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors-tile',
  templateUrl: './colors-tile.component.html',
  styleUrls: ['./colors-tile.component.css']
})

export class ColorsTileComponent {


  copyToClipboard = '';

  colors = [
    {title: 'alif', hex: '#39B980', rgb: '57  185  128', cmyk: '76  5  65  5'},
    {title: 'alif shop', hex: '#FFB500', rgb: '251  181  0 ', cmyk: '0  30  99  0'},
    {title: 'alif mobi', hex: '#37A134', rgb: '55  161  52', cmyk: '76  3  100  15'},
    {title: 'алиф салом', hex: '#C92225', rgb: '201  34  37', cmyk: '15  100  100  5'},
    {title: 'алиф академия', hex: '#00BFBF', rgb: '0  191  191', cmyk: '75  5  37  4'},
    {title: 'alif pay', hex: '#3899E2', rgb: '56  153  226', cmyk: '80  34  0  0'}
  ]

  copyColor(inp){
    inp.select();
    document.execCommand('copy');
  }
}
