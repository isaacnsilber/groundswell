function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genRan(max) {
    return getRandomInt(0, max);
}

var imagetolinkMap = "https://c1.staticflickr.com/5/4836/46833327392_c0fe4bb070_n.jpg,https://www.sas.upenn.edu/~cavitch/pdf-library/Spillers_AlltheThings.pdf \
https://c1.staticflickr.com/5/4865/46833327092_f91f528477_n.jpg,https://static1.squarespace.com/static/58ad660603596eec00ce71a3/t/58bec74415d5db1951fa9f15/1488897863830/Phenomenology+of+Whiteness.pdf \
https://c1.staticflickr.com/5/4818/31943868147_d5074766fb_n.jpg,https://www.google.com/search?rlz=1C5CHFA_enUS699US699&ei=5ufKW9u0OoLH_Qawq4aIDg&q=Venus+in+Two+Acts+-+Saidiya+Hartman&oq=Venus+in+Two+Acts+-+Saidiya+Hartman&gs_l=psy-ab.3..0i22i30l2.40859.61673..61850...1.0..0.90.2379.36......0....1..gws-wiz.......0j35i39j0i67j0i131j0i20i264j0i131i67j0i10i67j0i10j0i20i263i264j0i20i263j0i22i10i30.q8Hb7uMy2q8 \
https://c1.staticflickr.com/5/4879/45961308045_076f60e469_n.jpg,http://www.thirdtext.org/anechoic-white \
https://c2.staticflickr.com/8/7856/46833326252_ee1574cb91_n.jpg,https://www.youtube.com/watch?v=mDZUBX_nY_0 \
https://c1.staticflickr.com/5/4846/45970621475_e7dc3d525e_n.jpg,https://www.youtube.com/watch?v=hZ1ZWxY27do \
https://c2.staticflickr.com/8/7876/46885331661_b86ccb7c07_n.jpg,https://cpb-us-w2.wpmucdn.com/campuspress.yale.edu/dist/1/2391/files/2018/03/Moten-In-the-Break-11j1uox.pdf \
https://c2.staticflickr.com/8/7818/46833327692_00a389facc_n.jpg,http://www.yorku.ca/intent/issue5/poems/pdfs/tsitsiellajajiarticle.pdf \
https://c2.staticflickr.com/8/7858/31943861597_811c6482aa_n.jpg,https://altexploit.files.wordpress.com/2017/06/gilles-deleuze-difference-and-repetition-columbia-university-press-1995.pdf \
https://c1.staticflickr.com/5/4887/45970629915_12e80fe419_n.jpg,http://societyandspace.org/2017/09/18/on-black-negativity-or-the-affirmation-of-nothing/ \
https://c1.staticflickr.com/5/4815/33009987608_46559576fd_n.jpg,https://www.jstor.org/stable/pdf/2930634.pdf \
https://c1.staticflickr.com/5/4914/45970620665_4702835a6c_n.jpg,https://www.yorku.ca/intent/issue5/articles/jaredsexton.php \
https://c2.staticflickr.com/8/7824/46885324501_968f419739_n.jpg,https://www.youtube.com/watch?v=T3B5Gh2JSQg \
https://c2.staticflickr.com/8/7809/33009955788_2bc945be59_n.jpg,https://cpb-us-w2.wpmucdn.com/campuspress.yale.edu/dist/1/2296/files/2017/09/Paul-Gilroy-The-Black-Atlantic-Chapter-3-11299p9.pdf \
https://c1.staticflickr.com/5/4887/45970629915_12e80fe419_n.jpg,https://incivility.org/about/ \
https://c2.staticflickr.com/8/7817/46160257604_1b02bf8c2d_n.jpg,https://www.victoria-miro.com/video/38/ \
https://c2.staticflickr.com/8/7906/46833305902_ea6d42b905_n.jpg,https://www.youtube.com/channel/UCwlldaZuDFGeZ5QweLtn3jQ \
https://www.flickr.com/photos/167834894@N07/33009948278/sizes/n/,https://en.wikipedia.org/wiki/Whiteness_studies \
https://c2.staticflickr.com/8/7808/33009989708_4304202ce1_n.jpg,http://www.sundresspublications.com/agape/obsidianblues.pdf \
https://c2.staticflickr.com/8/7909/31943868397_904193da43_n.jpg,https://rackedanddispatched.noblogs.org/files/2017/01/Afro-pessimism2_imposed.pdf \
https://c1.staticflickr.com/5/4880/46160258034_f9cbeae150_n.jpg,http://www.rhizomes.net/issue29/index.html \
https://c2.staticflickr.com/8/7891/31943869477_37c81be0e9_n.jpg,http://www.rhizomes.net/issue30/index.html \
https://c2.staticflickr.com/8/7922/46833305742_9c71268bf9_n.jpg,http://www.rhizomes.net/files/manifesto.html \
https://c2.staticflickr.com/8/7869/31943861197_4d3a1bfd43_n.jpg,https://vimeo.com/144963559 \
https://c1.staticflickr.com/5/4855/33009986178_3542603325_n.jpg,http://writing.upenn.edu/pennsound/x/Moten.php \
https://c2.staticflickr.com/8/7915/31943867917_a4f2e6980d_n.jpg,http://www.minorcompositions.info/wp-content/uploads/2013/04/undercommons-web.pdf \
https://c1.staticflickr.com/5/4900/33009988638_d09df67835_n.jpg,https://www.youtube.com/watch?v=l7vRSu_wsNc \
https://c2.staticflickr.com/8/7897/45961312895_9f27dbd7f5_n.jpg,https://www.youtube.com/watch?v=ewY2wBrt7SM \
https://c2.staticflickr.com/8/7802/33009948628_d40fc965aa_n.jpg,https://selftitled.cargocollective.com/ \
https://c2.staticflickr.com/8/7879/33009948078_2d46f9ccc3_n.jpg,https://www.feministes-radicales.org/wp-content/uploads/2010/11/Audre-LORDE-Zami-A-New-Spelling-of-My-Name...-Sister-Outsider...-Undersong-Chosen-Poems-Old-and-New.pdf \
https://c1.staticflickr.com/5/4822/46833309832_ae74fdaac7_n.jpg,https://www.youtube.com/watch?v=_gZpfQfwe6Q \
https://c2.staticflickr.com/8/7853/45970629505_dba76bd57f_n.jpg,https://youtu.be/q9cxMsGFgQ8?t=593 \
https://c2.staticflickr.com/8/7840/31943867807_342222aa4a_n.jpg,https://en.wikipedia.org/wiki/Joseph_Goebbels \
https://c1.staticflickr.com/5/4813/46833310302_f4c7798848_n.jpg,https://www.youtube.com/watch?v=-C2SvsfTnwo \
https://c1.staticflickr.com/5/4918/46150903214_7547676355_n.jpg,https://en.wikipedia.org/wiki/Joseph_Goebbels#/media/File:Bundesarchiv_Bild_102-14597,_Berlin,_Opernplatz,_B%C3%BCcherverbrennung.jpg \
https://c2.staticflickr.com/8/7837/46160249094_5fa194c638_n.jpg,https://www.youtube.com/watch?v=otUZiuAJOoQ \
https://c1.staticflickr.com/5/4847/33009998098_e06e0a5e17_n.jpg,https://www.youtube.com/watch?v=UC3-5WEvYJ0 \
https://c2.staticflickr.com/8/7877/45970628945_f46838c845_n.jpg,https://www.youtube.com/watch?v=5R682M3ZEyk \
https://c2.staticflickr.com/8/7889/33000748538_f0297526ac_n.jpg,https://www.youtube.com/watch?v=6RUA5rYjK3I \
https://c2.staticflickr.com/8/7872/46833326852_7c18f12df1_n.jpg,https://vimeo.com/144305401 \
https://c2.staticflickr.com/8/7910/46160256904_630404fcde_n.jpg,https://www.socialism.com/drupal-6.8/sites/all/pdf/class/Roberts-Killing%20the%20Black%20Body.pdf \
https://c2.staticflickr.com/8/7922/33009986598_d1908bc3f8_n.jpg,https://donyc.com/events/2018/9/20/revenge-body-politics \
https://c2.staticflickr.com/8/7814/39911384053_50a980d548_n.jpg,http://ouleft.org/wp-content/uploads/John_Brown.pdf \
https://c2.staticflickr.com/8/7887/39911396103_b7f88ecd88_n.jpg,http://www3.gettysburg.edu/~jrudy/J%20Rudy%20-%20CWES%20330%20-%20John%20Brown%20-%202015%20Syllabus.pdf \
https://c1.staticflickr.com/5/4859/39911387813_c6a8ddbc32_n.jpg,http://teachingamericanhistory.org/library/document/niagara-movement-speech/ \
https://c1.staticflickr.com/5/4876/33000752768_29e6c33e26_n.jpg,https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D355D423B9C27607973CC02743FCC6D7/S0021875815000055a.pdf/john-brown-s-spirit-the-abolitionist-aesthetic-of-emancipatory-martyrdom-in-early-antilynching-protest-literature.pdf \
https://c2.staticflickr.com/8/7927/31943869217_cfda687a20_n.jpg,https://terreyrocoreograficoblog.files.wordpress.com/2016/10/singularities-dance-in-the-age-of-performance_andre-lepecki1.pdf \
https://c2.staticflickr.com/8/7853/31943867367_6c65eea93e_n.jpg,https://youtu.be/I6b5N_u7Ebs?t=4904 \
https://c1.staticflickr.com/5/4850/46833326682_82f0f178f7_n.jpg,https://www.youtube.com/watch?v=ZxZir6POGb0 \
https://c1.staticflickr.com/5/4883/45970615585_e9791d61c9_n.jpg,https://collabscoopscoalitions.files.wordpress.com/2018/04/hamacher_afformative-strike-benjamins-critique-of-violence.pdf \
https://c2.staticflickr.com/8/7902/31943861797_a0c5ee3a95_n.jpg,http://cscs.res.in/dataarchive/textfiles/textfile.2010-11-02.7672177498/file \
https://c1.staticflickr.com/5/4816/33009953868_779aa2a31d_n.jpg,https://english.columbia.edu/files/english/content/Critique_of_Violence.pdf \
https://c1.staticflickr.com/5/4915/39910906673_526bd236db_n.jpg,https://www.google.com/search?q=walter+scott+protests+charleston&rlz=1C5CHFA_enUS699US699&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiX1P2NyM7gAhUNGt8KHZyrAyUQ_AUIDygC&biw=1440&bih=763 \
https://c2.staticflickr.com/8/7904/45970629275_33aca1236c_n.jpg,https://soundcloud.com/endernyc \
https://c1.staticflickr.com/5/4844/33009987878_9057401e37_n.jpg,https://soundcloud.com/lord-tin \
https://c1.staticflickr.com/5/4863/31943868677_2b484c05f0_n.jpg,http://frankocean.tumblr.com/ \
https://c2.staticflickr.com/8/7916/33009987198_e5360d037c_n.jpg,https://vimeo.com/71306104 \
https://c1.staticflickr.com/5/4805/33009947838_1ccc0f69a6_n.jpg,https://www.tumblr.com/search/thank+you+for+this+memory \
https://c2.staticflickr.com/8/7846/33009988288_7ebc9bf4c0_n.jpg,https://www.tumblr.com/search/3068 \
https://c2.staticflickr.com/8/7810/46833306092_6faf243387_n.jpg,https://soundcloud.com/bearcats_mixtapes \
https://c1.staticflickr.com/5/4803/31943861367_9c8caabee9_n.jpg,https://www.iansteinbergmusic.com/ \
https://c1.staticflickr.com/5/4893/31943867717_ae590be0f3_n.jpg,https://soundcloud.com/djharam \
https://c1.staticflickr.com/5/4836/46833306422_40318df164_n.jpg,https://www.philly.com/philly/columnists/inga_saffron/mantua-artists-resistance-pushes-philly-to-build-a-better-grocery-store-20180119.html \
https://c1.staticflickr.com/5/4901/39910915243_30bacfe5e3_n.jpg,http://www.faculty.umb.edu/gary_zabel/Phil_100/Spinoza_files/guide%20to%20spinozas-ethics.pdf \
https://c1.staticflickr.com/5/4914/33009988478_5e68a58106_n.jpg,https://www.youtube.com/watch?v=AqLAKlkRM30 \
https://c2.staticflickr.com/8/7863/32246199087_98c05da05d_n.jpg,https://www.youtube.com/watch?v=-b0J_riuE38";

var imagetolinkList = imagetolinkMap.split(' ');
var imagestolinks = [];

_.each(imagetolinkList, function(imagetolinkString) {
    imagestolinks.push(imagetolinkString.split(','));
});

var visited = [];

function newIndex(max) {
    var index = genRan(max);

    while (visited.indexOf(index) >= 0) {
        index = genRan(max);
    }

    console.log(index);
    visited.push(index);
    return index;
}

for (i = 0; i < 17; i++) {
    var index = newIndex(imagestolinks.length - 1)
    var imgId = '#img' + i;
    var linkId = '#link' + i;
    $(imgId).attr('src', imagestolinks[index][0]);
    $(linkId).attr('href', imagestolinks[index][1]);
    $(linkId).attr('target', "_blank");
}

var imagetolink = 0;