var _animalTypeArr = ['포유류', '조류', '파충류', '양서류']
var _mammaliaArr = ['고라니','너구리','삵','수달','다람쥐','청설모','노루','족제비','담비','개','고양이','멧돼지','두더지','토끼','쥐']
var _birdsArr = ['참새류','오리류','올빼미류','매류','수리류','갈매기류','까마귀류','백로류','꿩류']
var _reptileArr = ['뱀', '도마뱀', '거북이']
var _amphibiaArr = ['개구리', '두꺼비', '도롱뇽']

;(function ($) {
  $.fn.setYearSelectData = function () {
    return this.each(function () {
      var target = this;
      var year = new Date().getFullYear();

      for(var i = year; i >= 2012; i--){
        $(target).append('<option value="' + i + '">' + i + '</option>');
      }

      $(target).val(year - 1);
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

