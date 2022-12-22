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
      pre_lis:[
        {id:1, name:"北海道"},
        {id:2, name:"北海道"},
        {id:3, name:"北海道"},
        {id:4, name:"北海道"},
        {id:5, name:"北海道"},
        {id:6, name:"北海道"},
        {id:7, name:"北海道"},
        {id:8, name:"北海道"},
        {id:9, name:"北海道"},
        {id:10, name:"北海道"},
        {id:11, name:"北海道"},
        {id:12, name:"北海道"},
        {id:13, name:"北海道"},
        {id:14, name:"北海道"},
        {id:15, name:"北海道"},
        {id:16, name:"北海道"},
        {id:17, name:"北海道"},
        {id:18, name:"北海道"},
        {id:19, name:"北海道"},
        {id:20, name:"北海道"},
        {id:21, name:"北海道"},
        {id:22, name:"北海道"},
        {id:23, name:"北海道"},
        {id:24, name:"北海道"},
        {id:25, name:"北海道"},
        {id:26, name:"北海道"},
        {id:27, name:"北海道"},
        {id:28, name:"北海道"},
        {id:29, name:"北海道"},
        {id:30, name:"北海道"},
        {id:31, name:"北海道"},
        {id:32, name:"北海道"},
        {id:33, name:"北海道"},
        {id:34, name:"北海道"},
        {id:35, name:"北海道"},
        {id:36, name:"北海道"},
        {id:37, name:"北海道"},
        {id:38, name:"北海道"},
        {id:39, name:"北海道"},
        {id:40, name:"福岡"},
        {id:41, name:"佐賀"},
        {id:42, name:"長崎県"},
        {id:43, name:"熊本県"},
        {id:44, name:"大分県"},
        {id:45, name:"宮崎県"},
        {id:46, name:"鹿児島県"},
        {id:47, name:"沖縄県"},
      ]
    }
  },
  mounted () {
    var prefectures_url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
    axios.get(prefectures_url, { headers: { 'X-API-KEY': 'WkpOalLsffxSUyR1OF527TvhpNbOmzZDjZAwUuzt' } }) 
    .then(response => (this.prefectures = response.data.result));
    // var pre_num=18
    var population_url = ' https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode='+pre_code;
    axios.get(population_url, { headers: { 'X-API-KEY': 'WkpOalLsffxSUyR1OF527TvhpNbOmzZDjZAwUuzt' } }) 
    .then(response => (this.population = JSON.stringify(response.data)));
  },
});
