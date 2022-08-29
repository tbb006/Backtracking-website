google.charts.load('current', {'packages':['corechart']});
    
google.charts.setOnLoadCallback(drawPrez1Chart);

google.charts.setOnLoadCallback(drawPrez2Chart);

google.charts.setOnLoadCallback(drawPrez3Chart);

google.charts.setOnLoadCallback(drawPrez4Chart);

function drawPrez1Chart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Tip');
  data.addColumn('number', 'Conținut');
  data.addRows([
    ['Pagina principală', 1],
    ['Prezentare algoritm', 1],
    ['Exerciții', 4],
    
  ]);

  var options = {title:'Prezentarea I',
                 width:400,
                 height:325};

  var chart = new google.visualization.PieChart(document.getElementById('Prez1_chart_div'));
  chart.draw(data, options);
}


function drawPrez2Chart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Tip');
  data.addColumn('number', 'Conținut');
  data.addRows([
    ['Aplicație JavaScript', 1],
    ['Imagini', 2],
    ['Audio', 1],
    ['Video', 1],
  ]);

  var options = {title:'Prezentarea a II-a',
                 width:400,
                 height:325};

  var chart = new google.visualization.PieChart(document.getElementById('Prez2_chart_div'));
  chart.draw(data, options);
}

function drawPrez3Chart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Tip');
    data.addColumn('number', 'Conținut');
    data.addRows([
      ['Test', 1],
      ['Joc', 1],
      ['Grafice', 1]
    ]);
  
    var options = {title:'Prezentarea a III-a',
                   width:400,
                   height:325};
  

    var chart = new google.visualization.PieChart(document.getElementById('Prez3_chart_div'));
    chart.draw(data, options);
  }

  function drawPrez4Chart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Tip');
    data.addColumn('number', 'Conținut');
    data.addRows([
      ['Pagina principală', 1],
      ['Prezentare algoritm', 1],
      ['Exerciții', 4],
      ['Aplicație JavaScript', 1],
      ['Imagini', 2],
      ['Audio', 1],
      ['Video', 1],
      ['Test', 1],
      ['Joc', 1],
      ['Grafice', 4]
    ]);
  
    var options = {title:'Pagina web conține:',
                   width:500,
                   height:380};
  
                   
    var chart = new google.visualization.PieChart(document.getElementById('Prez4_chart_div'));
    chart.draw(data, options);
  }