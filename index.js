new Vue({
  el: '#app',
  data () {
    return {
      prefectures: null,
      population: null,
      pre_code:[
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,false,false,false,
        false,false,false,false,false,false,false,
      ],
    }
  },
  methods:{
    displayGraph: function(){
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: this.labels,
          datasets: [{
              label: '人口推移グラフ',
              data: this.data
          }]
        }
      });
    }
  },
  methods:{
    rev_population: function(pre_num){
      axios.get('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode='+pre_num, { headers: { 'X-API-KEY': 'WkpOalLsffxSUyR1OF527TvhpNbOmzZDjZAwUuzt' } })
      .then(response => (this.population = response.data.result.data.find(
        (item) => (item.label === '総人口')
      )));
      if (this.population) {return this.population.data}
    }
  },
  mounted () {
    var prefectures_url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
    axios.get(prefectures_url, { headers: { 'X-API-KEY': 'WkpOalLsffxSUyR1OF527TvhpNbOmzZDjZAwUuzt' } }) 
    .then(response => (this.prefectures = response.data.result))
    .catch((error) => console.log(error));
    // pre.id => (this.pre_num);
    // v-bind:pre_num=pre.id;
    // var population_url = ' https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode='+pre_num;
    
    // var pre_num=13 ;
    // var parent_url ='https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=';
    // var api_key='WkpOalLsffxSUyR1OF527TvhpNbOmzZDjZAwUuzt';
    // var population_url = parent_url+pre_num;
    // axios.get(population_url, { headers: { 'X-API-KEY': api_key } }).then(response => (this.population = JSON.stringify(response.data)));

    // axios.get('https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=13', { headers: { 'X-API-KEY': 'WkpOalLsffxSUyR1OF527TvhpNbOmzZDjZAwUuzt' } }).then(response =>{
  
    //   this.data = response.data.year(sale=>sale.number);
    //   this.labels = response.data.value(sale=>sale.month);
  
    //   this.displayGraph();
  
    // })
  },


  //   mounted: function(){
  //     var ctx = document.getElementById('myChart').getContext('2d');
  //     var myChart = new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //         labels: [
  //           '1960','1965','1970','1975','1980','1985','1990','1995',
  //           '2000','2005','2010','2015','2020','2025','2030','2035','2040','2045'
  //         ],
  //         datasets: [{
  //           label: '四半期の売上数の遷移',
  //           data: this.data
  //       }],
  //     }
  //   });
  // }
  
});


//   datasets: [
//     {
//       label: 'A県',
//       data: [120,190,34,58,20,190,34,58,20,190,34,58,20,190,34,58,8,8]
//   },
//     {
//       label: 'B県',
//       data: [120,190,34,338,20,190,34,58,20,190,34,58,20,190,34,58,8,8]
//   }
// ]