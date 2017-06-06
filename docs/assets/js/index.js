// 郵便番号から住所を自動入力
function setAddress() {
    var zipCode = $('#zip-code').val();

    $.ajax({
        type: 'get'
        , url: 'https://maps.googleapis.com/maps/api/geocode/json'
        , crossDomain: true
        , dataType: 'json'
        , data: {
            address: zipCode
            , language: 'ja'
            , sensor: false
        }
        , success: function(response) {
            if(response.status == 'OK') {
                // APIのレスポンスから住所を取得
                var obj = response.results[0].address_components;
                if(obj.length < 5) {
                    alert('郵便番号が正しくありません');
                    return false;
                }
                $('#address1').val(obj[3]['long_name'] + obj[2]['long_name'] + obj[1]['long_name']);
            } else {
                alert('住所情報が取得できませんでした');
                return false;
            }
        }
    });
}