new Vue({
  el: '#app',
  data () {
    return {
      prefectures: null,
      population: null,
      id: 0,
      // api_key:'TP6LHy98HM4VjlC6POePIl6FUIDlpSvj9TmA0QF8',
      api_key:'0fwgv9E1dzvJ8XJ0bRpZpcnIWTT188EUYxZPdzw9',
      // year: [],
      // value: [],
      sel_pre_code:[],
      myChart: null,
      y_label:[
        '1960','1965','1970','1975','1980','1985','1990','1995','2000','2005','2010','2015','2020','2025','2030','2035','2040','2045'
      ],
      data:[],
    }
  },
  methods:{
    rev_population: function(pre_num){
      var parent_url = 'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=';
      axios.get(parent_url+pre_num, { headers: { 'X-API-KEY': this.api_key } })
      .then(response => (this.population = response.data.result.data.find(
        (item) => (item.label === '総人口')
        )));
      if (this.population) {return this.population.data}
    },
    rev_data: function(pre_num){
      var input=this.rev_population(pre_num)
      this.data=[];
      for(item in input){
        this.data.push(item.value)
      }
      if (this.data) {return this.data}
    },
    clear: function(){
      if (myChart) {
        this.myChart.destroy();
        var ctx = document.getElementById('myChart').getContext('2d');
        this.myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.y_label,
            datasets: [{label: '都道府県',data: [],}]
          },
          options: {
              scales: {
                yAxes: [{ticks: {min: 0,suggestedMax: 1000000,}}]
              }
            },})

      }
    },
    displayGraph:function(){
      var ctx = document.getElementById('myChart').getContext('2d');
      var hoge=1
      if(this.sel_pre_code.includes(hoge) ){
      this.myChart = new Chart(ctx, {
      type: 'line',
        data: {
          labels: this.y_label,
          datasets: [           
            {
              label: '北海道',
              fill: false,
              // data: [10000,20000,30000,40000,50000,60000,70000,80000,90000,1000000,10000,20000,30000,40000,50000,60000,70000,800000,],
              data: this.rev_data(hoge),
            }]
          },
          options: {
            scales: {
              yAxes: [{ticks: {min: 0,suggestedMax: 1000000,}}]
            }
          }
        });
      }
    }},

    
    mounted:
    function(){
      var ctx = document.getElementById('myChart').getContext('2d');
      this.myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.y_label,
          datasets: [{label: '都道府県',data: [],} ]
        },
        options: {
            scales: {
              yAxes: [{ticks: {min: 0,suggestedMax: 1000000,}}]
            }
          }
        });
        var prefectures_url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
        axios.get(prefectures_url, { headers: { 'X-API-KEY': this.api_key } }) 
        .then(response => (this.prefectures = response.data.result));
      },


  });
