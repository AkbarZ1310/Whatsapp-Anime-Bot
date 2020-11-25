const botname = 'Yu-No'
const prefix = '#'
function help( pushname ) {
    return `👋️Hi *${pushname}*, I'm ${botname}. 

⭐️ *Command List* ⭐️

*_User Commands_* 👥️

*CMD: #profile* 📝️
*Deskripsi: menampilkan profile user*
*Contoh: #profile*

*CMD: #groupinfo* ❤️
*Deskripsi: menampilkan info grup*
*Contoh: #groupinfo*

*CMD: #info* 📃️
*Deskripsi: menampilkan info tentang bot*
*Contoh: #info*

*_Query commands_* 🏕️

*CMD: #anime <nama anime>* ⛩️
*Deskripsi: menampilkan informasi anime yang diberikan*
*Contoh: #anime black butler*

*CMD: #wallpaper <query>* 🌌️
*Description: mengambil gambar yang diminta*
*Usage: #wallpaper Zelda*

*CMD: #sr <subreddit>* 📱️
*Deskripsi: mengambil gambar dari link*
*Contoh: #sr animeirl* 

*CMD: #translate <iso code>* 📒️
*Description: Translate teks*
*Usage: [quoted_msg] #translate en*
*Language codes: https://www.loc.gov/standards/iso639-2/php/code_list.php*

*CMD: #covid <nama negara>* 🌍️
*Deskripsi: menampilkan info covid 19*
*Contoh: #covid japan*

*CMD: #lyrics <nama lagu>* 🎶️
*Deskripsi: menampilkan lirik lagu yang disebutkan*
*Contoh: #lyrics despacito*

*CMD: #quotemaker | Quote | pembuat* 🌆️
*Deskripsi: menambahkan quote ke dalam gambar*
*Contoh: #quotemaker | Courage need not to be remembered for it is never forgotten | Zelda* 

*_Random commands_* ✨️

*CMD: #pokemon* 🎯️
*Deskripsi: mengirim gambar random pokemon*
*Contoh: #pokemon*

*CMD: #rpaper* 🏙️
*Deskripsi: mengirim random wallpaper*
*Contoh: #rpaper*

*CMD: #waifu* ❤️
*Deskripsi: mengirim gambar random waifu*
*Contoh: #waifu*

*CMD: #animeneko* 🐱️
*Deskripsi: mengirim gamber random anime neko*
*contoh: #animeneko*

*CMD: #neko* 🐈️
*Deskripsi: mengirim gambar random neko*
*contoh: #neko*

*CMD: #doggo* 🐕️
*Deskripsi:mengirim gambar random doggo*
*Contoh: #doggo*


*_Sticker Commands_* 🌌️

*CMD: #sticker* 🔖️
*Deskripsi: mengubah gambar menjadi stiker*
*Usage: Kirim gambar dengan #sticker sebagai caption nya*

*CMD: #tsticker* ♥️
*Deskripsi: membuang background gambar dan mengubah menjadi stiker*
*contoh: Kirim gambar dengan #tsticker sebagai caption nya* [hanya berlaku untuk gambar]

*Admin Commands - 1* 👑️
Note:Command ini hanya untuk Admin group!

*CMD: #act welcome* 🎉️
*Deskripsi: apabila ini aktif, bot akan menyambut member baru*
*contoh: #act welcome* 

*CMD: #ping <Teks(opsional)>* 🗣️
*Deskripsi: Tag semua member grup*
*Contoh: #ping*

*CMD: #delete* 🔀️
*Deskripsi: menghapus pesan yang dikirim oleh bot*
*Contoh: Reply pesan yang ingin dihapus (hanya teks dari bot!)

*_Admin Commads - 2_* 🌠️
Note: Command ini hanya untuk Admin group!

*CMD: #seticon* ❇️
*Deskripsi: Menggunakan gambar yang direply untuk profil group* 
*contoh: #seticon*

*CMD: #kick @user* 🏌️
*Deskripsi: Kick pengguna yang disebutkan oleh admin group* 
*Contoh: #kick @Tag*

*CMD: #promote @user* ⚖️
*Deskripsi: promote pengguna yang disebutkan oleh admin group* 
*Contoh: #promote @Tag*

*CMD: #demote @user* ⬇️
*Deskripsi: Demote pengguna yang disebutkan oleh admin group* 
*Contoh: #demote @Tag*


jika anda merasa bot ini bermanfaat,anda juga dapat memberikan donasi ke nomer ini 081382928370 (DANA)
Kami harap Anda bersenang-senang!`
}
exports.help = help()

function info() {
    return `*Bot infromation!* 🎉️

This bot is written in pure javascript with node.js runtime. 
If you'd like to know more join our support group using the link below!

Support Group: https://chat.whatsapp.com/DI6qXVdkqF2BBOeLD2sLqX

Github Repo: https://github.com/SomnathDas/Whatsapp-Botto-Re
 
*Author: Akbar ramadhan*
*Base Code: Yoga Sakthi*
*Features: MhankBarBar*
*Poll: Shubham Badgujar*`

}
exports.info = info()



