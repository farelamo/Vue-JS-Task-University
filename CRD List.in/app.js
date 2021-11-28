new Vue({
    el: '#film',
    data: {
        judul: '',
        waktu: '',
        list: [
            {judul: 'Shangci', waktu: '20-nov-2021'},
            {judul: 'Yowis Ben 3', waktu: '25-nov-2021'},
            {judul: 'S A V A G E', waktu: '15-aug-2021'},
        ],
    },
    methods: {
        tambah: function () {
            let tmp = {}
            tmp.judul = this.judul
            tmp.waktu = this.waktu
            this.list.push(tmp)
            this.judul = ''
            this.waktu = ''
        },
        hapus(index) {
            this.list.splice(index, 1)
        }
    }
})