/**
 * Created by yuguihu on 15/6/12.
 */
angular.module('starter.controllers', ['ionic',,'baiduMap'])
    .controller('LoginCtrl', function ($scope,$http,$state,$ionicPopup,$ionicLoading) {

        //
        var data = {username: 'huyugui', password: '123',usertype:'学生'};
        $scope.data = data;
        $scope.login = function () {
            var loading = $ionicLoading.show({content: 'Lade Daten...'});
            return $http.get('http://127.0.0.1:3000/sessions',{params:{usertype:$scope.data.usertype,username: $scope.data.username, password: $scope.data.password}}).
                success(function(data,status){
                if(data == null)
                {
                        var alertPopup = $ionicPopup.alert({
                            title: '警告',
                            template: '输入的用户或密码错误'
                        });
                        //alertPopup.then(function(res) {
                        //
                        //});
                }else
                {
                    $state.go('tab.home')
                }

            }).error(function(data,status){
                k=2;
            }).then(function() {
                    $ionicLoading.hide();

                });
        }
        //
    }).controller('HelpCtrl', function ($scope){
        //

        //
    }).controller('HomeCtrl', function ($scope){
        var longitude = 113.738487;
        var latitude = 34.361282;
        $scope.mapOptions = {
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 15,
            city: 'Xinzheng',
            markers: [{
                longitude: longitude,
                latitude: latitude,
                icon: 'http://img.coolwp.com/wp-content/uploads/2015/04/48-map-marker.png',
                width: 48,
                height: 48,
                title: '在哪儿',
                content: '新郑市梨河镇'
            }]
        };
    });