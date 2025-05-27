const people = [
  { name: 'AJ Chayapol Jutamas', img: 'img/person/AJ_Chayapol_Jutamas.jpg' },
  { name: 'AOU Thanaboon Kiatniran', img: 'img/person/AOU_Thanaboon_Kiatniran.jpg' },
  { name: 'ASHI Peerakan Teawsuwan', img: 'img/person/ASHI_Peerakan_Teawsuwan.jpg' },
  { name: 'AUN Napat Patcharachavalit', img: 'img/person/AUN_Napat__Patcharachavalit.jpg' },
  { name: 'AUNGPAO Ochiris Suwanacheep', img: 'img/person/AUNGPAO_Ochiris_Suwanacheep.jpg' },
  { name: 'Barcode Tinnasit Isarapongporn', img: 'img/person/Barcode_Tinnasit_Isarapongporn.jpg' },
  { name: 'BOOK Kasidet Plookphol', img: 'img/person/BOOK_Kasidet_Plookphol.jpg' },
  { name: 'BOOM Tharatorn Jantharaworakarn', img: 'img/person/BOOM_Tharatorn_Jantharaworakarn.jpg' },
  { name: 'BOUN Noppanut Guntachai', img: 'img/person/BOUN_Noppanut_Guntachai.jpg' },
  { name: 'CHIMON Wachirawit Ruangwiwat', img: 'img/person/CHIMON_Wachirawit_Ruangwiwat.jpg' },
  { name: 'CHOKUN Puttipong Jitbut', img: 'img/person/CHOKUN_Puttipong_Jitbut.jpg' },
  { name: 'DEW Jirawat Sutivanichsak', img: 'img/person/DEW_Jirawat_Sutivanichsak.jpg' },
  { name: 'DRAKE Sattabut Laedeke', img: 'img/person/DRAKE_Sattabut_Laedeke.jpg' },
  { name: 'DUNK Natachai Boonprasert', img: 'img/person/DUNK_Natachai_Boonprasert.jpg' },
  { name: 'EARTH Pirapat Watthanasetsiri', img: 'img/person/EARTH_Pirapat_Watthanasetsiri.jpg' },
  { name: 'EST Supha Sangaworawong', img: 'img/person/EST_Supha_Sangaworawong.jpg' },
  { name: 'FIRST Kanaphan Puitrakul', img: 'img/person/FIRST_Kanaphan_Puitrakul.jpg' },
  { name: 'FLUKE Gawin Caskey', img: 'img/person/FLUKE_Gawin_Caskey.jpg' },
  { name: 'FLUKE Jeeratch Wongpian', img: 'img/person/FLUKE_Jeeratch_Wongpian.jpg' },
  { name: 'FLUKE Nattanon Tongsaeng', img: 'img/person/FLUKE_Nattanon_Tongsaeng.jpg' },
  { name: 'FORCE Jiratchapong Srisang', img: 'img/person/FORCE_Jiratchapong_Srisang.jpg' },
  { name: 'FORD Allan Asawasuebsakul', img: 'img/person/FORD_Allan_Asawasuebsakul.jpg' },
  { name: 'FOURTH Nattawat Jirochtikul', img: 'img/person/FOURTH_Nattawat_Jirochtikul.jpg' },
  { name: 'FRANC Naruth Prateeppavameta', img: 'img/person/FRANC_Naruth_Prateeppavameta.jpg' },
  { name: 'GEMINI Norawit Titicharoenrak', img: 'img/person/GEMINI_Norawit_Titicharoenrak.jpg' },
  { name: 'GREAT Sapol Assawamunkong', img: 'img/person/GREAT_Sapol_Assawamunkong.jpg' },
  { name: 'GUITAR Supakorn Kantanit', img: 'img/person/GUITAR_Supakorn_Kantanit.jpg' },
  { name: 'GUN Atthaphan Phunsawat', img: 'img/person/GUN_Atthaphan_Phunsawat.jpg' },
  { name: 'GUY Sivakorn Lertchuchot', img: 'img/person/GUY_Sivakorn_Lertchuchot.jpg' },
  { name: 'HONG Pichetpong Chiradatesakunvong', img: 'img/person/HONG_Pichetpong_Chiradatesakunvong.jpg' },
  { name: 'INDY Thanathat Tanjararak', img: 'img/person/INDY_Thanathat_Tanjararak.jpg' },
  { name: 'INN Sarin Ronnakiat', img: 'img/person/INN_Sarin_Ronnakiat.jpg' },
  { name: 'JAVA Bhobdhama Hansa', img: 'img/person/JAVA_Bhobdhama_Hansa.jpg' },
  { name: 'JIMMY Jitaraphol Potiwihok', img: 'img/person/JIMMY_Jitaraphol_Potiwihok.jpg' },
  { name: 'JJ Chayakorn Jutamas', img: 'img/person/JJ_Chayakorn_Jutamas.jpg' },
  { name: 'JOONG Archen Aydin', img: 'img/person/JOONG_Archen_Aydin.jpg' },
  { name: 'JOSS Way-ar Sangngern', img: 'img/person/JOSS_Way-ar_Sangngern.jpg' },
  { name: 'JUNIOR Panachai Sriariyarungruang', img: 'img/person/JUNIOR_Panachai_Sriariyarungruang.jpg' },
  { name: 'KAY Kay Lertsittichai', img: 'img/person/KAY_Kay_Lertsittichai.jpg' },
  { name: 'KEEN Suvijak Piyanopharoj', img: 'img/person/KEEN_Suvijak_Piyanopharoj.jpg' },
  { name: 'KEN Kanthee Limpitikranon', img: 'img/person/KEN_Kanthee_Limpitikranon.jpg' },
  { name: 'KHAOTUNG Thanawat Ratanakitpaisan', img: 'img/person/KHAOTUNG_Thanawat_Ratanakitpaisan.jpg' },
  { name: 'KRIST Perawat Sangpotirat', img: 'img/person/KRIST_Perawat_Sangpotirat.jpg' },
  { name: 'LEGO Rapeepong Supatineekitdecha', img: 'img/person/LEGO_Rapeepong_Supatineekitdecha.jpg' },
  { name: 'LENG Thanaphon U-sinsap', img: 'img/person/LENG_Thanaphon_U-sinsap.jpg' },
  { name: 'LEO Leo Saussay', img: 'img/person/LEO_Leo_Saussay.jpg' },
  { name: 'LOUIS Thanawin Teeraphosukarn', img: 'img/person/LOUIS_Thanawin_Teeraphosukarn.jpg' },
  { name: 'LUKE Luke Ishikawa Plowden', img: 'img/person/LUKE_Luke_Ishikawa_Plowden.jpg' },
  { name: 'LUKE Peemsan Sotangkur', img: 'img/person/LUKE_Peemsan_Sotangkur.jpg' },
  { name: 'MARC Natarit Worakornlertsith', img: 'img/person/MARC_Natarit_Worakornlertsith.jpg' },
  { name: 'MARK Jiruntanin Trairattanayon', img: 'img/person/MARK_Jiruntanin_Trairattanayon.jpg' },
  { name: 'MARK Pakin Kuna-anuwit', img: 'img/person/MARK_Pakin_Kuna-anuwit.jpg' },
  { name: 'MICK Metas Opas-iamkajorn', img: 'img/person/MICK_Metas_Opas-iamkajorn.jpg' },
  { name: 'MIX Sahaphap Wongratch', img: 'img/person/MIX_Sahaphap_Wongratch.jpg' },
  { name: 'MOND Tanutchai Wijitvongtong', img: 'img/person/MOND_Tanutchai_Wijitvongtong.jpg' },
  { name: 'NANI Hirunkit Changkham', img: 'img/person/NANI_Hirunkit_Changkham.jpg' },
  { name: 'NANON Korapat Kirdpan', img: 'img/person/NANON_Korapat_Kirdpan.jpg' },
  { name: 'NEO Trai Nimtawat', img: 'img/person/NEO_Trai_Nimtawat.jpg' },
  { name: 'NEW Thitipoom Techa-apaikhun', img: 'img/person/NEW_Thitipoom_Techa-apaikhun.jpg' },
  { name: 'NICKY Na Chat Juntapun', img: 'img/person/NICKY_Na_Chat_Juntapun.jpg' },
  { name: 'NUT Thanat Danjesda', img: 'img/person/NUT_Thanat_Danjesda.jpg' },
  { name: 'OFF Jumpol Adulkittiporn', img: 'img/person/OFF_Jumpol_Adulkittiporn.jpg' },
  { name: 'OHM Pawat Chittsawangdee', img: 'img/person/OHM_Pawat_Chittsawangdee.jpg' },
  { name: 'OHM Thipakorn Thitathan', img: 'img/person/OHM_Thipakorn_Thitathan.jpg' },
  { name: 'OHM Thitiwat Ritprasert', img: 'img/person/OHM_Thitiwat_Ritprasert.jpg' },
  { name: 'PAPANG Phromphiriya Thongputtaruk', img: 'img/person/PAPANG_Phromphiriya_Thongputtaruk.jpg' },
  { name: 'PAUL Tanan Lohawatanakul', img: 'img/person/PAUL_Tanan_Lohawatanakul.jpg' },
  { name: 'PAWIN Thanik Kamontharanon', img: 'img/person/PAWIN_Thanik_Kamontharanon.jpg' },
  { name: 'PERTH Tanapon Sukumpantanasan', img: 'img/person/PERTH_Tanapon_Sukumpantanasan.jpg' },
  { name: 'PHUWIN Phuwin Tangsakyuen', img: 'img/person/PHUWIN_Phuwin_Tangsakyuen.jpg' },
  { name: 'POD Suphakorn Sriphotong', img: 'img/person/POD_Suphakorn_Sriphotong.jpg' },
  { name: 'POND Naravit Lertratkosum', img: 'img/person/POND_Naravit_Lertratkosum.jpg' },
  { name: 'POON Poon Mitpakdee', img: 'img/person/POON_Poon_Mitpakdee.jpg' },
  { name: 'PREM Warut Chawalitrujiwong', img: 'img/person/PREM_Warut_Chawalitrujiwong.jpg' },
  { name: 'PROM Teepakron Kwanboon', img: 'img/person/PROM_Teepakron_Kwanboon.jpg' },
  { name: 'RYU Phudtripart Bhudthonamochai', img: 'img/person/RYU_Phudtripart_Bhudthonamochai.jpg' },
  { name: 'SANTA Pongsapak Udomphoch', img: 'img/person/SANTA_Pongsapak_Udomphoch.jpg' },
  { name: 'SATANG Kittiphop Sereevichayasawat', img: 'img/person/SATANG_Kittiphop_Sereevichayasawat.jpg' },
  { name: 'SEA Dechchart Tasilp', img: 'img/person/SEA_Dechchart_Tasilp.jpg' },
  { name: 'SEA Tawinan Anukoolprasert', img: 'img/person/SEA_Tawinan_Anukoolprasert.jpg' },
  { name: 'SING Harit Cheewagaroon', img: 'img/person/SING_Harit_Cheewagaroon.jpg' },
  { name: 'SINGTO Prachaya Ruangroj', img: 'img/person/SINGTO_Prachaya_Ruangroj.jpg' },
  { name: 'SKY Wongravee Nateetorn', img: 'img/person/SKY_Wongravee_Nateetorn.jpg' },
  { name: 'SOODYACHT Patsit Permpoonsavat', img: 'img/person/SOODYACHT_Patsit_Permpoonsavat.jpg' },
  { name: 'SURF Patchara Silapasoonthorn', img: 'img/person/SURF_Patchara_Silapasoonthorn.jpg' },
  { name: 'TAY Tawan Vihokratana', img: 'img/person/TAY_Tawan_Vihokratana.jpg' },
  { name: 'TEE Teeradech Vitheepanich', img: 'img/person/TEE_Teeradech_Vitheepanich.jpg' },
  { name: 'TESHOW Teshow Promsakha na sakolnakron', img: 'img/person/TESHOW_Teshow_Promsakha_na_sakolnakron.jpg' },
  { name: 'THOR Thinnaphan Tantui', img: 'img/person/THOR_Thinnaphan_Tantui.jpg' },
  { name: 'TITLE Kirati Puangmalee', img: 'img/person/TITLE_Kirati_Puangmalee.jpg' },
  { name: 'TUI Chayatorn Trairattanapradit', img: 'img/person/TUI_Chayatorn_Trairattanapradit.jpg' },
  { name: 'WILLIAM Jakrapatr Kaewpanpong', img: 'img/person/WILLIAM_Jakrapatr_Kaewpanpong.jpg' },
  { name: 'WIN Metawin Opas-iamkajorn', img: 'img/person/WIN_Metawin_Opas-iamkajorn.jpg' },
  { name: 'WINNY Thanawin Pholcharoenrat', img: 'img/person/WINNY_Thanawin_Pholcharoenrat.jpg' }
];

let chosenPerson = null;

function initGame() {
  $('#grid').empty();
  people.forEach((person, index) => {
    $('#grid').append(`
      <div class="card" data-index="${index}">
        <div class="card-inner">
          <div class="card-front">
            <img src="${person.img}" alt="${person.name}">

            <div class="card-name">
              <h3>${person.name}</h3>
            </div>
          </div>
          <div class="card-back">
            <img src="img/cardBack.jpg" alt="Card Back">
          </div>
        </div>
      </div>
    `);
  });

  $('.card').on('click', function () {
    if (!chosenPerson) {
      chosenPerson = people[$(this).data('index')];
      $('#chosen-person').html(
        `<h2>You chose: ${chosenPerson.name}</h2><img src="${chosenPerson.img}" height="150">`
      );
    } else {
      $(this).toggleClass('flipped');
    }
  });
}

$('#restart-btn').on('click', () => {
  $('#restart-modal').fadeIn();
});

$('#confirm-restart').on('click', () => {
  $('#restart-modal').fadeOut();
  chosenPerson = null;
  $('#chosen-person').empty();
  initGame();
});

$('#cancel-restart').on('click', () => {
  $('#restart-modal').fadeOut();
});

$(document).ready(() => {
  initGame();
});
