new Vue({
    el: '#app',
    data: {
      newTrack: {
        name: '',
        duration: null,
        genre: ''
      },
      tracks: []
    },
    mounted() {
      this.loadTracks(); // Загрузка треков при загрузке страницы
    },
    methods: {
      addTrack() {
        if (this.newTrack.name && this.newTrack.duration && this.newTrack.genre) {
          this.tracks.push({
            name: this.newTrack.name,
            duration: this.newTrack.duration,
            genre: this.newTrack.genre
          });
          this.saveTracks(); // Сохранение всех треков в localStorage
          this.newTrack.name = '';
          this.newTrack.duration = null;
          this.newTrack.genre = '';
        } else {
          alert('Пожалуйста, заполните все поля');
        }
      },
      deleteTrack(index) {
        this.tracks.splice(index, 1);
        this.saveTracks(); // Сохранение всех треков после удаления трека
      },
      saveTracks() {
        const pageId = 'page2'; // Уникальный идентификатор для первой страницы
        localStorage.setItem(`tracks_${pageId}`, JSON.stringify(this.tracks)); // Сохранение треков в localStorage
      },
      loadTracks() {
        const pageId = 'page2'; // Уникальный идентификатор для первой страницы
        const savedTracks = localStorage.getItem(`tracks_${pageId}`);
        if (savedTracks) {
          this.tracks = JSON.parse(savedTracks); // Загрузка треков из localStorage
        }
      }
    }
  });