(function () {
	'use strict';
	var firstLeg;
	var secondLeg;
	var hypotenuse;

	firstLeg = prompt('Введите длинну первого катета в миллиметрах');
	secondLeg = prompt('Введите длинну второго катета в миллиметрах');

	hypotenuse = Math.sqrt(Math.pow(firstLeg, 2) + Math.pow(secondLeg, 2));
	alert('Длинна гипотенузы ' + hypotenuse + 'мм');

}());