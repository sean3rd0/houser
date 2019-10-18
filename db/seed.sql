CREATE TABLE houses (
id SERIAL PRIMARY KEY, 
name VARCHAR(30), 
address VARCHAR(100), 
city VARCHAR(100), 
state VARCHAR(2), 
zip INTEGER, 
img TEXT, 
mortgage DECIMAL, 
rent DECIMAL
);





INSERT INTO houses (
name, 
address, 
city, 
state, 
zip,
img, 
mortgage, 
rent
) VALUES (
'apodsifjasf',
'4000 adhfiop adj ln',
'manitoba',
'UT',
84124,
'ajdpofjapofnaspofnaspof',
412.009, 
234.56
), 
(
'ajipo',
'4040 qef q adj ln',
'lehi',
'TX',
76124,
'fjapofnaspofnaspof',
4129, 
24.56
), 
(
'sf',
'4300 aop adj ln',
'moba',
'VT',
78364,
'ad ouw ha',
4.09, 
2.56
);




