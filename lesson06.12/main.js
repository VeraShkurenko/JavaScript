let styles1 = [
    ['color', 'green'],
    ['font-size', '2em'],
    ['text-align', 'right'],
    ['text-decoration', 'underline']
  ];

  let styles2 = [
    ['color', 'blue'],
    ['font-size', '3em'],
    ['text-align', 'center'],
    ['font-weight', 'bold']
    
  ];

function applyStyles(stylesArray, text) 
{
    const styleString = stylesArray.map(style => `${style[0]}: ${style[1]}`).join('; ');
    document.write(`<p style="${styleString}">${text}</p>`);
}

applyStyles(styles1, 'Hello world!');
applyStyles(styles2, 'Hello world!');