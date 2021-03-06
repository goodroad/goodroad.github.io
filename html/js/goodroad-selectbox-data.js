var _animalTypeArr = ['포유류', '조류', '파충류', '양서류']
var _mammaliaArr = ['고라니','너구리','삵','수달','다람쥐','청설모','노루','족제비','담비','개','고양이','멧돼지','두더지','토끼','쥐']
var _birdsArr = ['참새류','오리류','올빼미류','매류','수리류','갈매기류','까마귀류','백로류','꿩류']
var _reptileArr = ['뱀', '도마뱀', '거북이']
var _amphibiaArr = ['개구리', '두꺼비', '도롱뇽']
var minYear = 2012

;(function ($) {
  $.ajaxSetup({
    beforeSend: function(xhr) {
      var $target = $('.indicator');
      var width = $target.width();
      var height = $target.height();

      var textMessage = $('<span>지표를 그리는중 입니다...</span>').css({color: '#ffffff', fontSize: 25, fontFamily: 'NanumBarunGothic, Arial, Helvetica, sans-serif', display: 'table-cell', verticalAlign: 'middle'});
      $('<div id="loadingIndicator"></div>')
        .css({
           position : 'absolute'
          ,display: 'table'
          ,top : $target.position().top
          ,width : width
          ,height : height
          ,zIndex : 999
          ,backgroundColor: 'rgba(238, 195, 20, 0.5)'
          ,textAlign: 'center'
        })
        .html(textMessage)
        .appendTo($target);

    },complete: function(xhr,status){
      $('#loadingIndicator').remove();
    }
  });

  $.fn.setYearSelectData = function (init) {
    return this.each(function () {
      var target = this;
      var year = new Date().getFullYear();

      // var selectList = '<option value="recent">' + "최근100" + '</option>';
        var selectList = init;
      for(var i = year; i >= 2012; i--){
          selectList += '<option value="' + i + '">' + i + '</option>';
      }
      $(target).append(selectList);
        if(init == null){
            $(target).val(year - 1);
        }else{
        }
    });
  }

  $.fn.setSelectData = function (_arr, firstLabel) {
    return this.each(function () {
      var target = this;
      $(target).html('');
      $(target).append('<option value="">' + firstLabel + '</option>');
      $.each(_arr, function(k, v){
        $(target).append('<option value="' + v + '">' + v + '</option>');
      })
    });
  }

})(jQuery);

