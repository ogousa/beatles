angular.module('albumController', [])
.controller('AlbumController', AlbumController);

AlbumController.$inject = ['$scope', '$routeParams', 'albumsInfo', 'goto'];

function AlbumController($scope, $routeParams, albumsInfo, goto) {
    $scope.albumId = parseInt($routeParams.id); // get the first part of id (album)
    $scope.songs  = albumsInfo.albums[$scope.albumId-1].songs;
    $scope.image  = albumsInfo.albums[$scope.albumId-1].image;
    $scope.title  = albumsInfo.albums[$scope.albumId-1].title;
    $scope.date   = albumsInfo.albums[$scope.albumId-1].date;

  //  goto("fast", "top");

    $scope.setSong = function(index) {
        songId = $scope.albumId + "-" + index; 
        goto("slow", "songText"); 
    }

    $scope.getSongPath = function() {
        return (songId == -1)? null : 'partials/songs/s_' + songId + '.html';
    }
}
