/**
 * Created by yuguihu on 15/6/12.
 */
angular.module('starter.services', [])
    .factory('User', function ($http, $q, $localstorage, SERVER) {
        // attempt login or signup

        var o = {
            username: false,
            session_id: false
        }
        o.auth = function (username, password, type) {

            return $http.post(SERVER.url + '/sessions', {username: username, password: password, type: type})
                .success(function (data) {
                    o.setSession(data.username, data.session_id, data.favorites);
                }).error(function (data,status) {

                });
        }
        o.destroySession = function () {
            $localstorage.setObject('user', {});
            o.username = false;
            o.session_id = false;
            o.favorites = [];
            o.newFavorites = 0;
        }

        o.checkSession = function () {
            var defer = $q.defer();

            if (o.session_id) {
                // if this session is already initialized in the service
                defer.resolve(true);

            } else {
                // detect if there's a session in localstorage from previous use.
                // if it is, pull into our service
                var user = $localstorage.getObject('user');

                if (user.username) {
                    o.setSession(user.username, user.session_id);
                } else {
                    // no user info in localstorage, reject
                    defer.resolve(false);
                }

            }

            return defer.promise;
        }
        o.setSession = function (username, session_id, favorites) {
            if (username) o.username = username;
            if (session_id) o.session_id = session_id;

            // set data in localstorage object
            $localstorage.setObject('user', {username: username, session_id: session_id});

        }

        return o;
    });

