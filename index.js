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
    }
    },


    // methods:{
    //   displayGraph: function(){
    //     var labels = ['2019年1月', '2019年2月', '2019年3月', '2019年4月'];
    //     var data = [120, 190, 34, 58];
    //     var ctx = document.getElementById('myChart').getContext('2d');
    //     var myChart = new Chart(ctx, {
    //     type: 'line',
    //     data: {
    //         labels: labels,
    //         datasets: [{
    //             label: '四半期の売上数の遷移',
    //             data: data
    //         }]
    //       }
    //     });
    //   }
    // },
    

    
    
    
    methods: {
    displayGraph:function(){
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: [
                   '1960','1965','1970','1975','1980','1985','1990','1995','2000','2005','2010','2015','2020','2025','2030','2035','2040','2045'
                ],
          datasets: [{
              label: '人口推移グラフ',
              fill: false,
              data: [],
          }]
        },
      options: {
        scales: {
            yAxes: [{ticks: {min: 0,suggestedMax: 1000000,}}]
        }
      }
      });
    }},
    mounted () {
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: [
                   '1960','1965','1970','1975','1980','1985','1990','1995','2000','2005','2010','2015','2020','2025','2030','2035','2040','2045'
                ],
          datasets: [{
              label: '人口推移グラフ',
              fill: false,
              data: [],
          }]
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
