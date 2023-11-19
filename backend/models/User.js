const mongoose=require("mongoose");
const connectToMongoDB=require("../db");

const userSchema=new mongoose.Schema(
    {
        id:{type:Number},
        first_name:{type:String},
        last_name:{type:String},
        email:{type:String},
        gender:{type:String},
        avatar:{type:String},
        domain:{type:String},
        available:{type:Boolean}
    }
)


const memberdata=[
    {"id":101,"first_name":"Roxanna","last_name":"Skipton","email":"rskipton2s@constantcontact.com","gender":"Female","avatar":"https://robohash.org/ullamnobisquia.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":102,"first_name":"Erinn","last_name":"Breeze","email":"ebreeze2t@miibeian.gov.cn","gender":"Genderqueer","avatar":"https://robohash.org/veritatisilloet.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":103,"first_name":"Harcourt","last_name":"Wooffinden","email":"hwooffinden2u@yandex.ru","gender":"Male","avatar":"https://robohash.org/maximeipsalibero.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":104,"first_name":"Leigh","last_name":"Smithen","email":"lsmithen2v@tamu.edu","gender":"Female","avatar":"https://robohash.org/adipiscicorruptidebitis.png?size=50x50&set=set1","domain":"Sales","available":true},
{"id":105,"first_name":"Court","last_name":"Arpur","email":"carpur2w@bigcartel.com","gender":"Male","avatar":"https://robohash.org/namprovidenttenetur.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":106,"first_name":"Nicolina","last_name":"Clutterbuck","email":"nclutterbuck2x@tumblr.com","gender":"Female","avatar":"https://robohash.org/asperioresnonnulla.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":107,"first_name":"Sibby","last_name":"Barnsdale","email":"sbarnsdale2y@earthlink.net","gender":"Female","avatar":"https://robohash.org/atdoloribusimpedit.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":108,"first_name":"Nichols","last_name":"Wisham","email":"nwisham2z@ovh.net","gender":"Male","avatar":"https://robohash.org/autemvelsint.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":109,"first_name":"Stephenie","last_name":"Brocks","email":"sbrocks30@shareasale.com","gender":"Female","avatar":"https://robohash.org/cuminet.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":110,"first_name":"Martynne","last_name":"Abrashkin","email":"mabrashkin31@tumblr.com","gender":"Female","avatar":"https://robohash.org/deseruntnumquamimpedit.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":111,"first_name":"Leonanie","last_name":"Sullly","email":"lsullly32@nyu.edu","gender":"Female","avatar":"https://robohash.org/laudantiumipsadolores.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":112,"first_name":"Matelda","last_name":"Josefsen","email":"mjosefsen33@mozilla.org","gender":"Female","avatar":"https://robohash.org/ullammaioresea.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":113,"first_name":"Barron","last_name":"Treuge","email":"btreuge34@yahoo.co.jp","gender":"Male","avatar":"https://robohash.org/velitutlaudantium.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":114,"first_name":"Karlik","last_name":"Broggelli","email":"kbroggelli35@cargocollective.com","gender":"Male","avatar":"https://robohash.org/voluptatesassumendaquisquam.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":115,"first_name":"Norene","last_name":"Comer","email":"ncomer36@ustream.tv","gender":"Female","avatar":"https://robohash.org/aliquamuthic.png?size=50x50&set=set1","domain":"Sales","available":true},
{"id":116,"first_name":"Aloysius","last_name":"Woltman","email":"awoltman37@photobucket.com","gender":"Male","avatar":"https://robohash.org/consequaturhicexercitationem.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":117,"first_name":"Sunny","last_name":"Rosingdall","email":"srosingdall38@columbia.edu","gender":"Male","avatar":"https://robohash.org/assumendaminussit.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":118,"first_name":"Kirsten","last_name":"Dran","email":"kdran39@youtube.com","gender":"Female","avatar":"https://robohash.org/etrationealiquid.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":119,"first_name":"Pepillo","last_name":"O'Flynn","email":"poflynn3a@ftc.gov","gender":"Male","avatar":"https://robohash.org/placeatnatussit.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":120,"first_name":"Britt","last_name":"Mostyn","email":"bmostyn3b@home.pl","gender":"Female","avatar":"https://robohash.org/siteamaxime.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":121,"first_name":"Rancell","last_name":"Petracchi","email":"rpetracchi3c@hubpages.com","gender":"Bigender","avatar":"https://robohash.org/ullamsaepemollitia.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":122,"first_name":"Angelika","last_name":"Thebe","email":"athebe3d@biglobe.ne.jp","gender":"Genderqueer","avatar":"https://robohash.org/inciduntenimrerum.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":123,"first_name":"Milicent","last_name":"Wooffitt","email":"mwooffitt3e@eventbrite.com","gender":"Female","avatar":"https://robohash.org/utetvoluptatem.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":124,"first_name":"Agneta","last_name":"Petett","email":"apetett3f@whitehouse.gov","gender":"Female","avatar":"https://robohash.org/etblanditiisaut.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":125,"first_name":"Whitney","last_name":"Gulston","email":"wgulston3g@slideshare.net","gender":"Male","avatar":"https://robohash.org/sitfugitnemo.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":126,"first_name":"Murial","last_name":"Axtell","email":"maxtell3h@paypal.com","gender":"Bigender","avatar":"https://robohash.org/doloremimpeditipsam.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":127,"first_name":"Pebrook","last_name":"Stoneham","email":"pstoneham3i@redcross.org","gender":"Male","avatar":"https://robohash.org/rerumexercitationemdoloremque.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":128,"first_name":"Cecil","last_name":"Varndall","email":"cvarndall3j@oracle.com","gender":"Male","avatar":"https://robohash.org/velitrerumeligendi.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":129,"first_name":"Brier","last_name":"McCrossan","email":"bmccrossan3k@rambler.ru","gender":"Polygender","avatar":"https://robohash.org/autemvoluptatemrerum.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":130,"first_name":"Hannie","last_name":"Mishow","email":"hmishow3l@wsj.com","gender":"Female","avatar":"https://robohash.org/quoutaut.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":131,"first_name":"Clair","last_name":"Wardale","email":"cwardale3m@weibo.com","gender":"Female","avatar":"https://robohash.org/estundedolores.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":132,"first_name":"Gabriella","last_name":"Purcell","email":"gpurcell3n@army.mil","gender":"Female","avatar":"https://robohash.org/veletnon.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":133,"first_name":"Alene","last_name":"Toten","email":"atoten3o@aboutads.info","gender":"Female","avatar":"https://robohash.org/inciduntprovidentnemo.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":134,"first_name":"Cornela","last_name":"Southerill","email":"csoutherill3p@deviantart.com","gender":"Polygender","avatar":"https://robohash.org/beataeipsumatque.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":135,"first_name":"Erwin","last_name":"MacSkeagan","email":"emacskeagan3q@diigo.com","gender":"Male","avatar":"https://robohash.org/etillumest.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":136,"first_name":"Keary","last_name":"Phizackarley","email":"kphizackarley3r@va.gov","gender":"Male","avatar":"https://robohash.org/doloremillumautem.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":137,"first_name":"Rae","last_name":"Oleksiak","email":"roleksiak3s@hubpages.com","gender":"Female","avatar":"https://robohash.org/remplaceatodit.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":138,"first_name":"Stafford","last_name":"Napoleone","email":"snapoleone3t@vinaora.com","gender":"Male","avatar":"https://robohash.org/veniammolestiaevoluptatibus.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":139,"first_name":"Winfield","last_name":"Crawforth","email":"wcrawforth3u@skyrock.com","gender":"Male","avatar":"https://robohash.org/ducimusdoloresaliquam.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":140,"first_name":"Hildy","last_name":"Witherby","email":"hwitherby3v@blinklist.com","gender":"Female","avatar":"https://robohash.org/nobisaperiamet.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":141,"first_name":"Jessamyn","last_name":"Forsdyke","email":"jforsdyke3w@princeton.edu","gender":"Female","avatar":"https://robohash.org/etducimusquas.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":142,"first_name":"Osbert","last_name":"Pinnegar","email":"opinnegar3x@dot.gov","gender":"Non-binary","avatar":"https://robohash.org/etveniamrerum.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":143,"first_name":"Lydon","last_name":"Radbond","email":"lradbond3y@tinyurl.com","gender":"Male","avatar":"https://robohash.org/sedquodexpedita.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":144,"first_name":"Anneliese","last_name":"Eldridge","email":"aeldridge3z@mtv.com","gender":"Female","avatar":"https://robohash.org/aetcorporis.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":145,"first_name":"Northrop","last_name":"Skerme","email":"nskerme40@baidu.com","gender":"Male","avatar":"https://robohash.org/autemducimusnulla.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":146,"first_name":"Mart","last_name":"Corballis","email":"mcorballis41@canalblog.com","gender":"Male","avatar":"https://robohash.org/autidculpa.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":147,"first_name":"Marylou","last_name":"Pech","email":"mpech42@hostgator.com","gender":"Genderqueer","avatar":"https://robohash.org/itaqueestautem.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":148,"first_name":"Gunar","last_name":"Balf","email":"gbalf43@bigcartel.com","gender":"Male","avatar":"https://robohash.org/culpapraesentiumomnis.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":149,"first_name":"Charlotta","last_name":"Buddington","email":"cbuddington44@nytimes.com","gender":"Female","avatar":"https://robohash.org/velitoditnon.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":150,"first_name":"Morris","last_name":"Waddams","email":"mwaddams45@pagesperso-orange.fr","gender":"Male","avatar":"https://robohash.org/laboriosamautoptio.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":151,"first_name":"Roi","last_name":"Povall","email":"rpovall46@ow.ly","gender":"Male","avatar":"https://robohash.org/nonnostrumquis.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":152,"first_name":"Shawn","last_name":"Swalwell","email":"sswalwell47@google.fr","gender":"Male","avatar":"https://robohash.org/consecteturcumqueaut.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":153,"first_name":"Armstrong","last_name":"Hysom","email":"ahysom48@themeforest.net","gender":"Male","avatar":"https://robohash.org/doloremeosfugiat.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":154,"first_name":"Dorella","last_name":"Auty","email":"dauty49@list-manage.com","gender":"Female","avatar":"https://robohash.org/suntuteius.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":155,"first_name":"Rheta","last_name":"Hildrew","email":"rhildrew4a@amazon.de","gender":"Female","avatar":"https://robohash.org/remsuntlabore.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":156,"first_name":"Dietrich","last_name":"Gowanlock","email":"dgowanlock4b@wp.com","gender":"Male","avatar":"https://robohash.org/enimsunteum.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":157,"first_name":"Yetta","last_name":"Davey","email":"ydavey4c@timesonline.co.uk","gender":"Female","avatar":"https://robohash.org/voluptatemnonofficiis.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":158,"first_name":"Jordanna","last_name":"McAmish","email":"jmcamish4d@woothemes.com","gender":"Female","avatar":"https://robohash.org/eateneturenim.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":159,"first_name":"Faydra","last_name":"Onslow","email":"fonslow4e@theguardian.com","gender":"Agender","avatar":"https://robohash.org/illomodiearum.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":160,"first_name":"Kane","last_name":"Arlet","email":"karlet4f@ftc.gov","gender":"Male","avatar":"https://robohash.org/pariaturnondolorum.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":161,"first_name":"Carlyle","last_name":"Bolver","email":"cbolver4g@fda.gov","gender":"Male","avatar":"https://robohash.org/molestiaemolestiaeet.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":162,"first_name":"Ezra","last_name":"Postance","email":"epostance4h@intel.com","gender":"Male","avatar":"https://robohash.org/ipsaveniamsed.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":163,"first_name":"Leila","last_name":"Isaksson","email":"lisaksson4i@hao123.com","gender":"Female","avatar":"https://robohash.org/facilissedtotam.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":164,"first_name":"Rogers","last_name":"Tomkies","email":"rtomkies4j@reverbnation.com","gender":"Male","avatar":"https://robohash.org/namminuserror.png?size=50x50&set=set1","domain":"Sales","available":true},
{"id":165,"first_name":"Elianore","last_name":"de Zamora","email":"edezamora4k@sohu.com","gender":"Female","avatar":"https://robohash.org/quodsedharum.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":166,"first_name":"Agneta","last_name":"Slamaker","email":"aslamaker4l@github.io","gender":"Female","avatar":"https://robohash.org/quomolestiasqui.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":167,"first_name":"Marie","last_name":"Imms","email":"mimms4m@unblog.fr","gender":"Female","avatar":"https://robohash.org/quoddolorquo.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":168,"first_name":"Kaia","last_name":"Measom","email":"kmeasom4n@auda.org.au","gender":"Female","avatar":"https://robohash.org/suscipitvoluptatemet.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":169,"first_name":"Alister","last_name":"Spehr","email":"aspehr4o@thetimes.co.uk","gender":"Male","avatar":"https://robohash.org/possimusabiste.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":170,"first_name":"Benedikt","last_name":"Stobbe","email":"bstobbe4p@pinterest.com","gender":"Male","avatar":"https://robohash.org/voluptatumexpeditapraesentium.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":171,"first_name":"Nicky","last_name":"Keyson","email":"nkeyson4q@prweb.com","gender":"Non-binary","avatar":"https://robohash.org/autdoloresquis.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":172,"first_name":"Taylor","last_name":"Atyea","email":"tatyea4r@spotify.com","gender":"Male","avatar":"https://robohash.org/porroeostenetur.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":173,"first_name":"Pearl","last_name":"Mustarde","email":"pmustarde4s@google.de","gender":"Female","avatar":"https://robohash.org/consequunturrerumperferendis.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":174,"first_name":"Vivianna","last_name":"Kuhl","email":"vkuhl4t@godaddy.com","gender":"Female","avatar":"https://robohash.org/repudiandaerationeofficia.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":175,"first_name":"Haze","last_name":"Sommer","email":"hsommer4u@etsy.com","gender":"Male","avatar":"https://robohash.org/adipisciexcepturiipsam.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":176,"first_name":"Patton","last_name":"Gearing","email":"pgearing4v@usatoday.com","gender":"Male","avatar":"https://robohash.org/quirepudiandaeaperiam.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":177,"first_name":"Beryle","last_name":"Spaight","email":"bspaight4w@merriam-webster.com","gender":"Female","avatar":"https://robohash.org/saepesitdoloremque.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":178,"first_name":"Halette","last_name":"Schaumann","email":"hschaumann4x@cisco.com","gender":"Female","avatar":"https://robohash.org/voluptasaperiamnon.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":179,"first_name":"Melloney","last_name":"Comelli","email":"mcomelli4y@amazon.de","gender":"Female","avatar":"https://robohash.org/fugapossimuspraesentium.png?size=50x50&set=set1","domain":"Sales","available":true},
{"id":180,"first_name":"Sanders","last_name":"Ridewood","email":"sridewood4z@kickstarter.com","gender":"Male","avatar":"https://robohash.org/velitrepellatrepudiandae.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":181,"first_name":"Luelle","last_name":"MacAlpin","email":"lmacalpin50@huffingtonpost.com","gender":"Female","avatar":"https://robohash.org/nostrumveroarchitecto.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":182,"first_name":"Quill","last_name":"Storey","email":"qstorey51@wix.com","gender":"Male","avatar":"https://robohash.org/modirepudiandaeadipisci.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":183,"first_name":"Yalonda","last_name":"Burdas","email":"yburdas52@epa.gov","gender":"Female","avatar":"https://robohash.org/repellataliquamqui.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":184,"first_name":"Putnam","last_name":"Mansour","email":"pmansour53@answers.com","gender":"Male","avatar":"https://robohash.org/ealiberoqui.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":185,"first_name":"Rooney","last_name":"Roderighi","email":"rroderighi54@springer.com","gender":"Male","avatar":"https://robohash.org/enimlaborumipsum.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":186,"first_name":"Reinaldos","last_name":"Shuttleworth","email":"rshuttleworth55@alibaba.com","gender":"Male","avatar":"https://robohash.org/totamquieos.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":187,"first_name":"Stacia","last_name":"Curreen","email":"scurreen56@unc.edu","gender":"Female","avatar":"https://robohash.org/cupiditatesintomnis.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":188,"first_name":"Pablo","last_name":"Di Giacomettino","email":"pdigiacomettino57@unblog.fr","gender":"Male","avatar":"https://robohash.org/accusamusnostrumvoluptatem.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":189,"first_name":"Jacobo","last_name":"Duesbury","email":"jduesbury58@smugmug.com","gender":"Male","avatar":"https://robohash.org/quibusdamsitneque.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":190,"first_name":"Jorey","last_name":"Kynan","email":"jkynan59@nydailynews.com","gender":"Female","avatar":"https://robohash.org/providentdolorsoluta.png?size=50x50&set=set1","domain":"Marketing","available":true},
{"id":191,"first_name":"Jacinta","last_name":"Pedlow","email":"jpedlow5a@netlog.com","gender":"Female","avatar":"https://robohash.org/nambeataedolores.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":192,"first_name":"Alf","last_name":"Cuss","email":"acuss5b@icq.com","gender":"Male","avatar":"https://robohash.org/debitissedquos.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":193,"first_name":"Devin","last_name":"Ahmad","email":"dahmad5c@springer.com","gender":"Female","avatar":"https://robohash.org/eosvoluptatemdolor.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":194,"first_name":"Dallon","last_name":"Stampfer","email":"dstampfer5d@flickr.com","gender":"Male","avatar":"https://robohash.org/nesciuntnisisint.png?size=50x50&set=set1","domain":"Finance","available":true},
{"id":195,"first_name":"Yelena","last_name":"Fairnie","email":"yfairnie5e@yellowpages.com","gender":"Female","avatar":"https://robohash.org/suntsintaut.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":196,"first_name":"Duff","last_name":"Oxtiby","email":"doxtiby5f@tiny.cc","gender":"Male","avatar":"https://robohash.org/praesentiumilloasperiores.png?size=50x50&set=set1","domain":"Business Development","available":true},
{"id":197,"first_name":"Pammie","last_name":"Signori","email":"psignori5g@webeden.co.uk","gender":"Genderqueer","avatar":"https://robohash.org/numquamquibusdamfacere.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":198,"first_name":"Fabian","last_name":"Damper","email":"fdamper5h@webmd.com","gender":"Male","avatar":"https://robohash.org/doloresquaeratmagni.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":199,"first_name":"Ambrosius","last_name":"Wendover","email":"awendover5i@bbc.co.uk","gender":"Male","avatar":"https://robohash.org/quisquamquiomnis.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":200,"first_name":"Stavro","last_name":"Potkins","email":"spotkins5j@admin.ch","gender":"Male","avatar":"https://robohash.org/velittemporaaut.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":201,"first_name":"Tracy","last_name":"Twiggs","email":"ttwiggs5k@ustream.tv","gender":"Male","avatar":"https://robohash.org/etassumendadeserunt.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":202,"first_name":"Brady","last_name":"McKenna","email":"bmckenna5l@yandex.ru","gender":"Male","avatar":"https://robohash.org/arationeasperiores.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":203,"first_name":"Britt","last_name":"Seedman","email":"bseedman5m@theguardian.com","gender":"Male","avatar":"https://robohash.org/veladipisciquo.png?size=50x50&set=set1","domain":"Management","available":false},
{"id":204,"first_name":"Dennison","last_name":"Huxley","email":"dhuxley5n@marriott.com","gender":"Bigender","avatar":"https://robohash.org/iustorationein.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":205,"first_name":"Llywellyn","last_name":"Sleeford","email":"lsleeford5o@globo.com","gender":"Male","avatar":"https://robohash.org/consequunturasperioresvoluptate.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":206,"first_name":"Berthe","last_name":"Garaghan","email":"bgaraghan5p@canalblog.com","gender":"Female","avatar":"https://robohash.org/suntnonest.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":207,"first_name":"Nicolina","last_name":"Ivic","email":"nivic5q@seesaa.net","gender":"Female","avatar":"https://robohash.org/earumvoluptatemet.png?size=50x50&set=set1","domain":"Finance","available":false},
{"id":208,"first_name":"Maddy","last_name":"Crannage","email":"mcrannage5r@netlog.com","gender":"Female","avatar":"https://robohash.org/iustositdebitis.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":209,"first_name":"Edgar","last_name":"Martland","email":"emartland5s@tuttocitta.it","gender":"Male","avatar":"https://robohash.org/utidut.png?size=50x50&set=set1","domain":"Business Development","available":false},
{"id":210,"first_name":"Adora","last_name":"Veazey","email":"aveazey5t@linkedin.com","gender":"Female","avatar":"https://robohash.org/accusamusexercitationemqui.png?size=50x50&set=set1","domain":"UI Designing","available":false},
{"id":211,"first_name":"Darby","last_name":"Arnson","email":"darnson5u@bbc.co.uk","gender":"Male","avatar":"https://robohash.org/voluptateperspiciatisfuga.png?size=50x50&set=set1","domain":"Sales","available":false},
{"id":212,"first_name":"Ingunna","last_name":"Biaggiotti","email":"ibiaggiotti5v@craigslist.org","gender":"Female","avatar":"https://robohash.org/minimavoluptatibusaut.png?size=50x50&set=set1","domain":"IT","available":false},
{"id":213,"first_name":"Asher","last_name":"O'Heneghan","email":"aoheneghan5w@networkadvertising.org","gender":"Male","avatar":"https://robohash.org/noneoset.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":214,"first_name":"Eulalie","last_name":"Charrier","email":"echarrier5x@scribd.com","gender":"Bigender","avatar":"https://robohash.org/teneturrepudiandaeaccusantium.png?size=50x50&set=set1","domain":"Marketing","available":false},
{"id":215,"first_name":"Augustine","last_name":"Fishley","email":"afishley5y@simplemachines.org","gender":"Male","avatar":"https://robohash.org/evenietrerumquae.png?size=50x50&set=set1","domain":"UI Designing","available":true},
{"id":216,"first_name":"Casey","last_name":"Kauschke","email":"ckauschke5z@goodreads.com","gender":"Bigender","avatar":"https://robohash.org/estfugiatautem.png?size=50x50&set=set1","domain":"Management","available":true},
{"id":217,"first_name":"Hayden","last_name":"Lantoph","email":"hlantoph60@ask.com","gender":"Male","avatar":"https://robohash.org/easaepevitae.png?size=50x50&set=set1","domain":"IT","available":true},
{"id":218,"first_name":"Goddart","last_name":"Latchmore","email":"glatchmore61@elpais.com","gender":"Male","avatar":"https://robohash.org/accusamusquoarchitecto.png?size=50x50&set=set1","domain":"Sales","available":false}


]

const memberCollection = mongoose.model('users', userSchema);

async function insertmember() {
    try {
        await connectToMongoDB();
        const result = await memberCollection.insertMany(memberdata);
        console.log(`${result.length} documents inserted into the courses collection`);
    } catch (error) {
        console.error(`Error inserting documents: ${error.message}`);
    }
}

// insertmember();

module.exports = memberCollection;