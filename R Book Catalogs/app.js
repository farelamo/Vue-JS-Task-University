new Vue({
    el: '#book',
    data: {
        cari: '',
        list: [
            {judul: 'PHP', waktu: '25-nov-2021', gambar: 'php.jpg'},
            {judul: 'Node JS Jilid 2', waktu: '13-juli-2021', gambar: 'node.jpg'},
            {judul: 'Fundamental Progamming', waktu: '20-jan-2021', gambar: 'fund.jpg'},
            {judul: 'Array', waktu: '22-okt-2021', gambar: 'array.jpg'},
            {judul: 'Time Complexity', waktu: '31-feb-2021', gambar: 'time.jpg'},
            {judul: 'C++ Basic', waktu: '30-apr-2021', gambar: 'c++.jpg'},
            {judul: 'Golang', waktu: '19-jun-2021', gambar: 'golang.jpg'},
            {judul: 'Dasar Algoritma', waktu: '21-jul-2021', gambar: 'algo.jpg'},
            {judul: 'JAVA Progamming', waktu: '17-mei-2021', gambar: 'java.jpg'},
            {judul: 'Vue JS Dasar', waktu: '20-nov-2021', gambar: 'vue.jpg'},
            {judul: 'C# for Beginner', waktu: '10-feb-2021', gambar: 'c.jpg'},
            {judul: 'Mastering Phyton', waktu: '09-mar-2021', gambar: 'phyton.jpg'},
            {judul: 'Basic OOP', waktu: '27-sept-2021', gambar: 'oop.jpg'},
            {judul: 'React JS', waktu: '15-aug-2021', gambar: 'react.jpg'},
        ],
    },
    computed: {
        search: function () {
            return this.list.filter((b) => {
                return b.judul.match(this.cari)
            })
        }
    }
})