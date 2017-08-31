var app = new Vue({
  el: '#app',
  data: {
    msg: 'Hallo vue',
    filename: '',
    filetypes: '',
    size: '',
    location: '',
    upload: [],
    fileupload: '',
    links: []
  },
  methods: {
    appendFile(e){
      var files = e.target.files || e.dataTransfer.files;
      console.log(files[0]);
      this.fileupload = files[0]
    },
    uploadFile(){ 
      var self = this
      const formData = new FormData()
      formData.append('files', this.fileupload)
      axios.post(`http://localhost:3000/profile/upload`, formData)
      .then( result => {
        console.log(result.data);
        self.upload = result
      })
      }
    },
    created(){
     var self = this
     axios.get('http://localhost:3000')
     .then(function(res){
       console.log(res);
       self.links = res.data
     })
     .catch(err => {
       console.log(err);
     })
   }
  })
