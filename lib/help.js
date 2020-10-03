function menu() {
    return ` 
Selamat Datang di *MCPR_BOT*🤖 
Berikut adalah beberapa fitur yang ada pada *MCPR_BOT*🤖!
sebelum menggunakan BOT
Bacalah S&K *!snk*
Menelfon nomer bot = Block!
┯┷ ☾ Info ☽
╽
┠> *!info [Untuk Informasi Bot]*
┠> *!readme [Menegetahui fungsi]*
┠> *!donasi [UNTUK DONASI]*
┠> *!snk [Syarat dan Ketentuan]*
╿
┷┯ ☾ Group Commands ☽
   ╽_Admin group only_
   ╽
   ┠> *!add 62858xxxxx*
   ┠> *!kick @tagmember*
   ┠> *!promote @tagmember*
   ┠> *!demote @tagadmin*
   ┠> *!mentionAll*
   ┠> *!adminList*
   ┠> *!ownerGroup*
   ┠> *!leave*
   ┠> *!linkGroup*
   ┠> *!delete [replyChatBot]*
   ┠> *!kickAll*
   ╿
┯┷ ☾ Downloader Commands ☽
╽
┠> *!ytmp3 [linkYt]*
┠> *!ytmp4 [linkYt]*
┠> *!ig [linkIg]*_[MT]_
┠> *!fb [linkFb]*
╿
┷┯ ☾ Others Commands ☽
   ╽
   ┠> *!join [linkGroup]*
   ┠> *!sticker*
   ┠> *!jadwalShalat [daerah]*
   ┠> *!jadwalTv [channel]*
   ┠> *!listChannel*
   ┠> *!cuaca [tempat]*
   ┠> *!tts [kode bhs] [teks]*
   ┠> *!igStalk [@username]*
   ┠> *!wiki [query]*
   ┠> *!infoGempa*_[MT]_
   ┠> *!quotemaker [|teks|author|theme]*
   ┠> *!nulis [teks]*_[MT]_
   ┠> *!lirik [optional]*
   ╽
   ┠> *!randomNekoNime*
   ┠> *!randomTraNnime*
   ┠> *!randomAnime*
   ┠> *!waifu*
   ┠> *!husbu*
   ┠> *!quotes*
   ┠> *!quotesnime*
   ┠> *!wait*
   ┠> *!neko*
   ┠> *!pokemon*
   ┠> *!inu*
   ╿
   ╿
   ╰╼> Kirim perintah *!readme* untuk mengetahui fungsi dan cara penggunaan perintah di atas, WAJIB BACA!!.`
}
exports.menu = menu()
function readme() {
    return `
*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp4 https://youtu.be/Bskehapzke8*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *!ig https://www.instagram.com/p/CEcNz0GoA4o/?igshid=11k8kupfuug14*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *!fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalTv Indosiar*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *!cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *!tts id Test*
Note : Max 250 huruf

*[@username]* Diisi dengan username Instagram yang valid, tanpa tanda “[” dan “]”
Contoh : *!igStalk @mcpr_25*

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *!quotemaker |Odading|Mang Oleh|Shark*

*[linkGroup]* Diisi dengan link group whatsapp yang valid, tanpa tanda “[” dan “]”.
Contoh : *!join https://chat.whatsapp.com/Bhhw77d5t2gjao8*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *!lirik aku bukan boneka*`
}
exports.readme = readme()
function info() {
    return `Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript
Owner Bot : wa.me/6283107660652
Author? : MCPR_25
Oh iya kawan, 
Bot ini free bisa digunakan siapa saja :)
Support bot ini dengan berdonasi :) *!donasi*`
}
exports.info = info()
function snk() {
    return `Syarat dan Ketentuan Bot *MCPR_BOT*🤖 
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot

Thanks !`
}
exports.snk = snk()
function donate() {
    return `Ya halo om.. Mau donasi?
    
Kalo mau donate langsung ae ke :
OVO/PULSA/DANA/LINKAJA : 085156833669
SAWERIA : https://saweria.co/donate/mcpr25
Thanks !`
}
exports.donate = donate()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
