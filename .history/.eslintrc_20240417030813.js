module.exports = {
'env': {
'browser': true,
'es2021': true,
'node': true
},
'extends': 'eslint:recommended',
'overrides': [],
'parserOptions': {
'ecmaVersion': 'latest',
'sourceType': 'module'
},
'rules': {
	  // Правило для проверки отступов (например, использование 2 пробелов)
	  'indent': ['error', 2],
	  // Правило для проверки использования точек с запятой
	  'semi': ['error', 'always'],
	  // Другие правила...
	}
  }