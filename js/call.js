var thead = $('.thead');
var tbody = $('.tbody');

$('.item').on('click', function() {
  $(this).addClass('active').siblings().removeClass('active');
});

function loadTable(link, url) {
     $.ajax({
      url : url,
      dataType : "json"
    })
    .done(function (res) {
      $('.page-header').html(link);
      var text1 = '';
      for(prop in res[0]) {
        text1 += '<th>'+prop+'</th>'
      }
      thead.html(text1);
      var text = '';
      for (var i = 0; i < res.length; i++) {
        text += '<tr>';
      for(prop in res[i]) {
        text += '<td>'+res[i][prop]+'</td>'
      }
        text += '</tr>';
      }
      tbody.html(text);
      
    });
}


$('li a').on('click', function(e) {
  e.preventDefault();
  const link = $(this).attr('href');
  const links = {
      books: "https://mysafeinfo.com/api/data?list=bestnovels1&format=json&case=default&token=XH5nFfa1MsMqUNaZ3716yRM2WaJjIT6L",
      novels: "https://mysafeinfo.com/api/data?list=bestnovels7&format=json&case=default&token=XH5nFfa1MsMqUNaZ3716yRM2WaJjIT6L",
      actors: "https://mysafeinfo.com/api/data?list=bestactors1&format=json&case=default&token=XH5nFfa1MsMqUNaZ3716yRM2WaJjIT6L"
  }
  loadTable(link, links[link]);
  console.log(links[link]);
})