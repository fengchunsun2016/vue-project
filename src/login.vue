<template>
  <div>
    <p>kljsldjfs</p>
    <h2>ajax</h2>
  </div>
</template>
<script>
export default {
data: function () {
    return {}
  },
  methods: {
    click: function () {
      $.ajax({
        url: "http://192.168.95.91:9087/api/wrap/user/GetVerifyCode",
        data: {
          phone: "13565235478"
        },
        success: function(data){
          console.log("对了")
        },
        error: function(){
          console.log("错了")
        }
      })
    }
  },
}
</script>
