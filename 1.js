var gradus_celc = prompt ('Введите температуру в градусах Цельсия', '');
 
gradus_faring = Math.round((gradus_celc * (9 / 5) + 32) * 100)/100;
alert  (gradus_faring);
