$(function(){
  
  var myChart = echarts.init(document.getElementById('main'));
  // 指定图表的配置项和数据
 
  var option = {
        title: {
        text: 'JavaScript语言排名变化'
      },
      tooltip: {},
      legend: {
        data:['排名']
      },
      xAxis: {
        data: [2000,2005,2010,2015,2020]
      },
      yAxis: {},
      series: [{
        name: '排名',
        type: 'line',
        data: [6,9,8,8,7]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    var rank = [
        ['语言名称', '排名', '升或降', '变化幅度'],
        ['java', 1, '降', '-0.01%'],
        ['C', 2, '升', '+2.44%'],
        ['Python', 3, '升', '+1.44%'],
        ['C++', 4, '降', '-2.58%'],
        ['C#', 5, '升', '+2.07%'],
        ['Visual Basic .NET', 6, '降', '-1.17%'],
        ['JavaScript', 7, '降', '-0.85%'],
      ];
    var container = document.getElementById('main1');

    var hot = new Handsontable(container, {
        width: '100%',
        height: '100%',
        data: rank,
        rowHeaders: false,
        colHeaders: false,
        rowHeights:40,
        colWidths:200,
    });
});
