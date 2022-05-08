/* EasyWC, An easy word cloud javascript
* Copyright 2022 Luohao Xu and contributors.
* Released under the MIT license
*
* */

// EasyWC

class EasyWC{

    constructor(element, dict) {
        this.elem = document.querySelector('#'+element)
        this.dict = dict
        this.colors = [
            '#ff3366', '#B03060', '#9999ff', '#339933',
            '#F08080','#EE9A00', '#4169E1', '#6959CD',
            '#CD2990', '#2E8B57']
        this.lowerFontsize = 16
        this.upperFontsize = 36
        this.clickEvent = ''

    }

    // Max value of this.dict
    getMax(){
        let maxValue = 0
        Object.values(this.dict).forEach(function (value) {
            maxValue = Math.max(maxValue, value)
        })
        return maxValue
    }


    // Generate one word
    genOneWord(word, value) {
        let elem = document.createElement('span'),
            rand0 = Math.floor(Math.random() * 9) + 1,
            rand1 = Math.floor(Math.random() * 9) + 1,
            rand2 = Math.floor(Math.random() * 9) + 1,
            rand3 = Math.floor(Math.random() * 9) + 1

        elem.textContent = word
        elem.style.position = 'relative'
        elem.style.top = rand0 * 3 + 'px'
        elem.style['paddingLeft'] = rand1 * 3 + 'px '
        elem.style['paddingRight'] = rand2 * 3 + 'px'
        elem.style.color = this.colors[rand0 % this.colors.length]
        elem.style.display = 'inline-block'
        if(rand3 > 5) rand3 = -rand3
        elem.style['transform'] = 'rotate(' + rand3 + 'deg)'
        elem.style['-ms-transform'] = 'rotate(' + rand3 + 'deg)' /* Internet Explorer */
        elem.style['-moz-transform'] = 'rotate(' + rand3 + 'deg)' /* Firefox */
        elem.style['-webkit-transform'] = 'rotate(' + rand3 + 'deg)' /* Safari and Chrome */
        elem.style['-o-transform'] = 'rotate(' + rand3 + 'deg)'
        elem.style.fontSize = this.lowerFontsize + value / this.getMax() * (this.upperFontsize - this.lowerFontsize) +'px'
        elem.style.fontWeight = 500
        elem.style.cursor = 'pointer'
        elem.onmouseover = function (){
            elem.style.opacity = '0.8'
            elem.style.textShadow = '2px 2px 1px white'
        }
        elem.onmouseleave = function (){
            elem.style.opacity = ''
            elem.style.textShadow = ''
        }
        elem.setAttribute("onclick", this.clickEvent + "('" + word + "'," + value + ")");

        return elem
    }

    init(){
        // Generate all words
        let keys = Object.keys(this.dict)
        for (const key in keys) {
            let word = keys[key],
                count = this.dict[keys[key]]
            let oneWordElem = this.genOneWord( word, count)
            this.elem.appendChild(oneWordElem)
        }

    }

}



