window.addEventListener("DOMContentLoaded", (event) =>{
    const aboutGameButton = document.getElementById("aboutGameButton");
    const newGameButton = document.getElementById("newGameButton");
    const newGameBoardButton = document.getElementById("newGameBoardButton");
    var checkBox = document.getElementById("nav-toggle");

    aboutGameButton.addEventListener("click", function(){
        if (checkBox.checked == true){
            checkBox.checked = false;
          }
    });
    newGameButton.addEventListener("click", function(){
        location.hash = "gameSection";
        if (checkBox.checked == true){
            checkBox.checked = false;
          }
        startNewGame();
    });
    
    newGameBoardButton.addEventListener("click", function(){
        location.hash = "gameSection";
        if (checkBox.checked == true){
            checkBox.checked = false;
          }
        startNewGameBoard();
    });
});


const randomWords_a = ["aaa","aaron","abc","able","about","above","abroad","abs","absent","abu","abuse","acc","accent","accept","access","ace","acer","acid","acids","acm","acne","acre","acres","across","act","acting","action","active","actor","actors","acts","actual","acute","ada","adam","adams","add","added","adding","adds","adidas","adipex","adjust","admin","admit","adobe","adopt","adrian","ads","adsl","adult","adults","advert","advice","advise","adware","aerial","affair","affect","afford","afraid","africa","after","again","age","aged","agency","agenda","agent","agents","ages","aging","ago","agree","agreed","agrees","ahead","aid","aids","aim","aimed","aims","air","aka","ala","alan","alarm","alaska","albany","albert","album","albums","alert","alerts","alex","alfred","ali","alias","alice","alien","align","alike","alive","all","allah","allan","allen","allied","allow","allows","alloy","almost","alone","along","alot","alpha","alpine","also","alt","alter","alto","alumni","always","amanda","amazon","amber","ambien","amd","amend","amino","among","amount","amp","amy","ana","anal","analog","anchor","and","andale","andrea","andrew","andy","angel","angela","angels","anger","angle","angola","angry","animal","anime","ann","anna","anne","annex","annie","annual","answer","ant","anti","any","anyone","anyway","aol","apache","apart","api","apnic","apollo","app","appeal","appear","apple","apply","approx","apps","apr","april","apt","aqua","arab","arabia","arabic","arc","arcade","arch","arctic","are","area","areas","arena","arg","argue","argued","arise","arm","armed","armor","arms","army","arnold","around","array","arrest","arrive","arrow","art","arthur","artist","arts","aruba","ascii","ash","ashley","asia","asian","aside","asin","ask","asked","asking","asks","asn","asp","aspect","aspnet","ass","assess","asset","assets","assign","assist","assume","assure","asthma","asus","ata","ate","athens","ati","atlas","atm","atom","atomic","attach","attack","attend","auburn","aud","audi","audio","audit","aug","august","aurora","aus","austin","author","auto","autos","autumn","avatar","ave","avenue","avg","avi","avoid","avon","award","awards","aware","away","awful","axis","aye"];

const randomWords_b = ["babe","babes","babies","baby","back","backed","backup","bacon","bad","badge","badly","bag","bags","bailey","baker","baking","bald","bali","ball","ballet","ballot","balls","ban","banana","band","bands","bang","bank","banks","banned","banner","bar","barbie","bare","barely","barn","barnes","barrel","barry","bars","base","based","bases","basic","basics","basin","basis","basket","bass","bat","batch","bath","baths","batman","battle","bay","bbc","bbs","bbw","bdsm","beach","beads","beam","bean","beans","bear","bears","beast","beat","beats","beauty","beaver","became","become","bed","beds","bee","beef","been","beer","before","began","begin","begins","begun","behalf","behind","being","beings","belief","belize","belkin","bell","belle","belly","belong","below","belt","belts","ben","bench","bend","benz","berlin","berry","beside","best","bet","beta","beth","better","betty","beyond","bhutan","bias","bible","bid","bidder","bids","big","bigger","bike","bikes","bikini","bill","bills","billy","bin","binary","bind","bingo","bio","biol","bios","bird","birds","birth","bishop","bit","bitch","bite","bits","biz","black","blacks","blade","blades","blah","blair","blake","blame","blank","blast","blend","bless","blind","blink","block","blocks","blog","blogs","blond","blonde","blood","bloody","bloom","blow","blue","blues","blvd","bmw","board","boards","boat","boats","bob","bobby","boc","bodies","body","bold","bolt","bomb","bon","bond","bonds","bone","bones","bonus","boob","boobs","book","books","bool","boom","boost","boot","booth","boots","booty","border","bored","boring","born","bosnia","boss","boston","both","bother","bottle","bottom","bought","bound","bow","bowl","box","boxed","boxes","boxing","boy","boys","bra","brad","brain","brake","brakes","branch","brand","brands","bras","brass","brave","brazil","breach","bread","break","breaks","breast","breath","breed","breeds","brian","brick","bridal","bride","bridge","brief","briefs","bright","bring","brings","broad","broke","broken","broker","bronze","brook","brooks","bros","brown","browse","bruce","brunei","brush","brutal","bryan","bryant","bubble","buck","bucks","buddy","budget","buf","buffer","bufing","bug","bugs","build","builds","built","bulk","bull","bullet","bumper","bunch","bundle","bunny","burden","bureau","buried","burke","burn","burner","burns","burst","burton","bus","buses","bush","busty","busy","but","butler","butt","butter","button","butts","buy","buyer","buyers","buying","buys","buzz","bye","byte"];

const randomWords_c = ["cab","cabin","cable","cables","cache","cached","cad","cafe","cage","cake","call","called","calls","calm","calvin","cam","came","camel","camera","camp","campus","can","canada","canal","cancel","cancer","candle","candy","cannon","canon","cant","canvas","canyon","cap","cape","car","carb","carbon","card","cards","care","career","carey","cargo","caring","carl","carlo","carlos","carmen","carol","carpet","carry","cars","cart","carter","case","cases","casey","cash","casino","casio","cast","castle","casual","cat","catch","cats","cattle","caught","cause","caused","causes","cave","cell","cells","celtic","cement","census","cent","center","centre","cents","cest","cet","cfr","cgi","chad","chain","chains","chair","chairs","chan","chance","change","chaos","charge","charm","charms","chart","charts","chase","chat","cheap","cheat","cheats","check","checks","cheers","cheese","chef","chem","chen","cheque","cherry","chess","chest","chevy","chi","chick","chicks","chief","child","chile","china","chip","chips","choice","choir","choose","chorus","chose","chosen","chris","christ","chrome","chuck","church","cialis","cindy","cinema","circle","circus","cisco","cite","cited","cities","city","civic","civil","claim","claims","claire","clan","clara","clark","clarke","class","clause","clay","clean","clear","clerk","click","clicks","client","cliff","climb","clinic","clip","clips","clock","clocks","clone","close","closed","closer","closes","cloth","cloud","clouds","cloudy","club","coach","coal","coast","coat","coated","cock","cocks","cod","code","codes","coding","coffee","cohen","coin","coins","col","cold","cole","colin","collar","colon","colony","color","colors","colour","column","com","combat","combo","come","comedy","comes","comic","comics","coming","comm","commit","common","comp","compaq","comply","con","condo","condos","cook","cooked","cookie","cool","cooler","cooper","cop","cope","copied","copies","copper","copy","coral","cord","core","cork","corn","corner","corp","corps","corpus","cos","cost","costa","costs","cotton","could","count","counts","county","couple","coupon","course","court","courts","cove","cover","covers","cow","cowboy","cox","cpu","crack","cradle","craft","crafts","craig","crap","craps","crash","crazy","cream","create","credit","creek","crest","crew","crime","crimes","crisis","crm","crop","crops","cross","crowd","crown","crude","cruise","cruz","cry","cuba","cube","cubic","cult","cum","cup","cups","cure","cursor","curtis","curve"];

const randomWords_d = ["dad","daddy","daily","dairy","daisy","dakota","dale","dallas","dam","damage","dame","damn","dan","dana","dance","danger","daniel","danish","danny","dans","dare","dark","darwin","das","dash","dat","data","date","dated","dates","dating","dave","david","davis","dawn","day","days","dayton","ddr","dead","deadly","deaf","deal","dealer","deals","dealt","dean","dear","death","deaths","debate","debian","debt","debug","debut","dec","decade","decent","decide","deck","decor","dee","deemed","deep","deeper","deeply","deer","def","defeat","defend","define","degree","del","delay","delays","delete","delhi","dell","delta","deluxe","dem","demand","demo","den","denial","denied","dennis","dense","dental","denver","deny","depend","depot","dept","depth","deputy","der","derby","derek","des","desert","design","desire","desk","detail","detect","dev","devel","device","devil","devon","dial","dialog","diana","diane","diary","dice","dick","dicke","dicks","did","die","died","diego","dies","diesel","diet","diff","differ","diffs","dig","digest","digit","dildo","dildos","dim","dining","dinner","dip","dir","direct","dirt","dirty","dis","disc","disco","discs","dish","dishes","disk","disks","disney","dist","div","dive","divide","divine","diving","divx","diy","dna","dns","doc","dock","docs","doctor","dod","dodge","doe","does","dog","dogs","doing","doll","dollar","dolls","dom","domain","dome","don","donald","donate","done","donna","donor","donors","dont","doom","door","doors","dos","dosage","dose","dot","double","doubt","doug","dover","dow","down","dozen","dozens","dpi","draft","drag","dragon","drain","drama","draw","drawn","draws","dream","dreams","dress","drew","dried","drill","drink","drinks","drive","driven","driver","drives","drop","drops","drove","drug","drugs","drum","drums","drunk","dry","dryer","dsc","dsl","dts","dual","dubai","dublin","duck","dude","due","dui","duke","dumb","dump","duncan","duo","durham","during","dust","dutch","duties","duty","dvd","dvds","dying","dylan"];

const randomWords_e = ["each","eagle","eagles","ear","earl","early","earn","earned","ears","earth","ease","easier","easily","east","easter","easy","eat","eating","eau","ebay","ebony","ebook","ebooks","echo","eco","eddie","eden","edgar","edge","edges","edit","edited","editor","eds","edt","edward","effect","effort","egg","eggs","egypt","eight","either","elder","elect","eleven","elite","ellen","ellis","else","elvis","emacs","email","emails","emily","eminem","emma","empire","employ","empty","enable","enb","end","ended","endif","ending","ends","enemy","energy","eng","engage","engine","enjoy","enough","ensure","ent","enter","enters","entire","entity","entry","enzyme","eos","epa","epic","epson","equal","equity","era","eric","erik","erotic","erp","error","errors","escape","escort","espn","essay","essays","essex","est","estate","etc","ethics","ethnic","eugene","eur","euro","europe","euros","eva","eval","evans","eve","even","event","events","ever","every","evil","exact","exam","exams","exceed","excel","except","excess","excuse","exec","exempt","exist","exists","exit","exotic","exp","expand","expect","expert","expo","export","ext","extend","extent","extra","extras","eye","eyed","eyes"];

const randomWords_f = ["fabric","face","faced","faces","facial","facing","fact","factor","facts","fail","failed","fails","fair","fairly","fairy","faith","fake","fall","fallen","falls","false","fame","family","famous","fan","fancy","fans","faq","faqs","far","fare","fares","farm","farmer","farms","fast","faster","fat","fatal","fate","father","fatty","fault","favor","favors","favour","fax","fbi","fcc","fda","fear","fears","feat","feb","fed","fee","feed","feeds","feel","feels","fees","feet","fell","fellow","felt","female","fence","feof","ferry","fetish","fever","few","fewer","fiber","fibre","field","fields","fifth","fifty","fig","fight","figure","fiji","file","filed","files","filing","fill","filled","film","filme","films","filter","fin","final","finals","find","finder","finds","fine","finest","finger","finish","finite","fire","fired","fires","firm","firms","first","fiscal","fish","fisher","fist","fit","fits","fitted","five","fix","fixed","fixes","fla","flag","flags","flame","flash","flat","flavor","fleece","fleet","flesh","flex","flickr","flight","flip","float","flood","floor","floors","floppy","floral","flour","flow","flower","flows","floyd","flu","fluid","flush","flux","fly","flyer","flying","foam","focal","focus","fog","fold","folder","folk","folks","follow","font","fonts","foo","food","foods","fool","foot","for","forbes","force","forced","forces","ford","forest","forge","forget","forgot","fork","form","formal","format","formed","former","forms","fort","forth","forty","forum","forums","fossil","foster","foto","fotos","fought","foul","found","four","fourth","fox","frame","framed","frames","france","frank","fraser","fraud","fred","free","freely","freeze","french","fresh","fri","friday","fridge","friend","frog","from","front","frost","frozen","fruit","fruits","ftp","fuck","fucked","fuel","fuji","full","fully","fun","fund","funded","funds","funk","funky","funny","fur","fusion","future","fuzzy","fwd"];

const randomWords_g = ["gage","gain","gained","gains","galaxy","gale","game","games","gaming","gamma","gang","gap","gaps","garage","garcia","garden","garlic","garmin","gary","gas","gate","gates","gather","gauge","gave","gay","gays","gba","gbp","gcc","gdp","gear","geek","gel","gem","gen","gender","gene","genes","geneva","genius","genome","genre","genres","gentle","gently","geo","george","gerald","german","get","gets","ghana","ghost","ghz","giant","giants","gibson","gif","gift","gifts","gig","girl","girls","gis","give","given","gives","giving","glad","glance","glass","glen","glenn","global","globe","glory","gloves","glow","gmbh","gmc","gmt","gnome","gnu","goal","goals","goat","god","gods","goes","going","gold","golden","golf","gone","gonna","good","goods","google","gordon","gore","gospel","gossip","got","gothic","goto","gotta","gotten","gov","govt","gpl","gps","grab","grace","grad","grade","grades","graham","grain","grams","grand","grande","granny","grant","grants","graph","graphs","gras","grass","gratis","grave","gray","great","greece","greek","green","greene","greg","grew","grey","grid","grill","grip","groove","gross","ground","group","groups","grove","grow","grown","grows","growth","gsm","gst","gtk","guam","guard","guards","guess","guest","guests","gui","guide","guided","guides","guild","guilty","guinea","guitar","gulf","gun","guns","guru","guy","guyana","guys","gym","gzip"];

const randomWords_h = ["habits","hack","hacker","had","hair","hairy","haiti","half","hall","halo","ham","hammer","hand","handed","handle","hands","handy","hang","hans","hansen","happen","happy","harbor","hard","harder","hardly","harley","harm","harold","harper","harris","harry","hart","harvey","has","hash","hat","hate","hats","have","haven","having","hawaii","hawk","hay","hayes","hazard","hdtv","head","headed","header","heads","health","hear","heard","heart","hearts","heat","heated","heater","heath","heaven","heavy","hebrew","heel","height","held","helen","helena","hell","hello","helmet","help","helped","helps","hence","henry","hentai","her","herald","herb","herbal","herbs","here","hereby","herein","hero","heroes","hey","hidden","hide","high","higher","highly","highs","hiking","hill","hills","hilton","him","hindu","hint","hints","hip","hire","hired","hiring","his","hist","hit","hits","hiv","hobby","hockey","hold","holdem","holder","holds","hole","holes","hollow","holly","holmes","holy","home","homes","hon","honda","honest","honey","hong","honor","honors","hood","hook","hop","hope","hoped","hopes","hoping","horn","horny","horror","horse","horses","hose","host","hosted","hostel","hosts","hot","hotel","hotels","hour","hourly","hours","house","houses","how","howard","howto","href","hrs","html","http","hub","hudson","huge","hugh","hughes","hugo","hull","human","humans","humor","hung","hunger","hungry","hunt","hunter","hurt","hwy","hybrid"];

const randomWords_i = ["ian","ibm","ice","icon","icons","icq","ict","idaho","ide","idea","ideal","ideas","idle","idol","ids","ieee","ignore","iii","ill","ima","image","images","img","immune","impact","import","impose","inbox","inc","incest","inch","inches","incl","income","ind","indeed","index","india","indian","indie","indoor","inf","infant","info","inform","ing","injury","ink","inkjet","inline","inn","inner","inns","input","inputs","ins","insert","inside","int","intake","intel","intend","intent","inter","intl","into","intro","invest","invite","ion","iowa","ipaq","ipod","ips","ira","iran","iraq","iraqi","irc","irish","iron","irs","isa","isaac","isbn","islam","island","isle","iso","isp","israel","issn","issue","issued","issues","ist","italia","italic","italy","item","items","its","itsa","itself","itunes","ivory"];

const randomWords_j = ["jack","jacket","jackie","jacob","jade","jaguar","jail","jake","jam","james","jamie","jan","jane","janet","japan","jar","jason","java","jay","jazz","jean","jeans","jeep","jeff","jenny","jeremy","jerry","jersey","jesse","jesus","jet","jets","jewel","jewish","jews","jill","jim","jimmy","joan","job","jobs","joe","joel","john","johnny","johns","join","joined","joins","joint","joke","jokes","jon","jones","jordan","jose","joseph","josh","joshua","joy","joyce","jpeg","jpg","juan","judge","judges","judy","juice","jul","julia","julian","julie","july","jump","jun","june","jungle","junior","junk","jury","just","justin","jvc"];

const randomWords_k = ["kai","kansas","karen","karl","karma","kate","kathy","katie","kay","kde","keen","keep","keeps","keith","kelkoo","kelly","ken","kenny","keno","kent","kenya","kept","kernel","kerry","kevin","key","keys","kick","kid","kidney","kids","kijiji","kill","killed","killer","kills","kim","kinase","kind","kinda","kinds","king","kings","kirk","kiss","kit","kits","kitty","klein","knee","knew","knife","knight","knit","knives","knock","know","known","knows","kodak","kong","korea","korean","kruger","kurt","kuwait","kyle"];

const randomWords_l = ["lab","label","labels","labor","labour","labs","lace","lack","ladder","laden","ladies","lady","laid","lake","lakes","lamb","lambda","lamp","lamps","lan","lance","land","lands","lane","lanes","lang","lanka","lap","laptop","large","larger","larry","las","laser","last","lat","late","lately","later","latest","latex","latin","latina","latino","latter","latvia","laugh","launch","laura","lauren","law","lawn","laws","lawyer","lay","layer","layers","layout","lazy","lbs","lcd","lead","leader","leads","leaf","league","lean","learn","lease","least","leave","leaves","led","lee","leeds","left","leg","legacy","legal","legend","legs","lemon","len","lender","length","lens","lenses","leo","leon","leone","les","leslie","less","lesser","lesson","let","lets","letter","leu","level","levels","levy","lewis","lexus","liable","lib","libs","lid","lie","lies","life","lift","light","lights","like","liked","likely","likes","lil","lime","limit","limits","linda","line","linear","lined","lines","link","linked","links","linux","lion","lions","lip","lips","liquid","lisa","list","listed","listen","lists","lit","lite","little","live","lived","liver","lives","living","liz","llc","lloyd","llp","load","loaded","loads","loan","loans","lobby","loc","local","locale","locate","lock","locked","locks","lodge","log","logan","logged","logic","login","logo","logos","logs","lol","lolita","london","lone","lonely","long","longer","look","looked","looks","lookup","loop","loops","loose","lopez","lord","los","lose","losing","loss","losses","lost","lot","lots","lotus","lou","loud","louis","louise","lounge","love","loved","lovely","lover","lovers","loves","loving","low","lower","lowest","lows","ltd","lucas","lucia","luck","lucky","lucy","luis","luke","lunch","lung","luther","luxury","lycos","lying","lynn","lyric","lyrics"];

const randomWords_m = ["mac","macro","mad","made","madrid","mae","mag","magic","magnet","mai","maiden","mail","mailed","mails","mailto","main","maine","mainly","major","make","maker","makers","makes","makeup","making","malawi","male","males","mali","mall","malta","mambo","man","manage","manga","manner","manor","manual","many","map","maple","maps","mar","marble","marc","march","marco","marcus","mardi","margin","maria","mariah","marie","marina","marine","mario","marion","mark","marked","marker","market","marks","mars","mart","martha","martin","marvel","mary","mas","mask","mason","mass","master","mat","match","mate","math","mating","matrix","mats","matt","matter","mature","maui","max","may","maybe","mayor","mazda","mba","meal","meals","mean","means","meant","meat","med","medal","media","median","medium","meet","meets","meetup","mega","mel","mem","member","memo","memory","men","mens","ment","mental","mentor","menu","menus","mercy","mere","merely","merge","merger","merit","merry","mesa","mesh","mess","met","meta","metal","metals","meter","meters","method","metres","metric","metro","mexico","meyer","mfg","mhz","mia","miami","mic","mice","michel","micro","mid","middle","midi","might","mighty","mike","mil","milan","mild","mile","miles","milf","milfs","milk","mill","miller","mills","milton","mime","min","mind","minds","mine","mines","mini","mining","minor","mins","mint","minus","minute","mirror","misc","miss","missed","mit","mix","mixed","mixer","mixing","mlb","mls","mobile","mod","mode","model","models","modem","modems","modern","modes","modify","mods","module","mold","mom","moment","moms","mon","monaco","monday","money","monica","monkey","mono","monroe","monte","month","months","mood","moon","moore","moral","more","morgan","morris","moscow","moses","moss","most","mostly","motel","motels","mother","motion","motor","motors","mount","mounts","mouse","mouth","move","moved","movers","moves","movie","movies","moving","mpeg","mpegs","mpg","mph","mrna","mrs","msg","msgid","msgstr","msie","msn","mtv","much","mud","mug","multi","mumbai","munich","murder","murphy","murray","muscle","museum","music","muslim","must","mutual","muze","myers","myrtle","myself","mysql","myth"];

const randomWords_n = ["nail","nails","naked","nam","name","named","namely","names","nancy","nano","naples","narrow","nasa","nascar","nasdaq","nasty","nat","nathan","nation","native","nato","nature","nav","naval","navy","nba","nbc","ncaa","near","nearby","nearly","nec","neck","need","needed","needle","needs","neil","nelson","neo","neon","nepal","nerve","nest","nested","net","neural","nevada","never","new","newark","newbie","newer","newest","newly","news","newton","next","nextel","nfl","nhl","nhs","nice","nick","nickel","nicole","niger","night","nights","nike","nikon","nil","nine","nipple","nissan","noble","nobody","node","nodes","noise","nokia","non","none","noon","nor","norm","normal","norman","north","norton","norway","nos","nose","not","note","noted","notes","notice","notify","notion","notre","nov","nova","novel","novels","now","nsw","ntsc","nude","nudist","nudity","nuke","null","number","nurse","nurses","nut","nuts","nutten","nvidia","nyc","nylon"];

const randomWords_o = ["oak","oaks","oasis","obj","object","obtain","occur","occurs","ocean","oclc","oct","odd","odds","oecd","oem","off","offer","offers","office","offset","often","ohio","oil","oils","okay","old","older","oldest","olive","oliver","omaha","oman","omega","once","one","ones","onion","online","only","ons","onto","ooo","oops","open","opened","opens","opera","opt","optics","option","oracle","oral","orange","orbit","order","orders","oregon","org","organ","orgasm","orgy","origin","oscar","other","others","ottawa","ought","our","ours","out","outer","outlet","output","oval","oven","over","owen","own","owned","owner","owners","owns","oxford","oxide","oxygen","ozone"];

const randomWords_p = ["pac","pace","pack","packed","packet","packs","pad","pads","page","pages","paid","pain","paint","pair","pairs","pal","palace","pale","palm","palmer","pam","pamela","pan","panama","panel","panels","panic","pants","paper","papers","papua","par","para","parade","parcel","parent","paris","parish","park","parker","parks","part","partly","parts","party","pas","paso","pass","passed","passes","past","pasta","paste","pastor","pat","patch","patent","path","paths","patio","patrol","paul","paxil","pay","payday","paying","paypal","pays","pci","pcs","pct","pda","pdas","pdf","pdt","peace","peak","pearl","peas","pee","peeing","peer","peers","pen","pencil","penis","penn","penny","pens","people","pepper","per","period","perl","permit","perry","person","perth","peru","pest","pet","pete","peter","petite","pets","pgp","phase","phases","phd","phi","phil","philip","phone","phones","photo","photos","php","phpbb","phrase","phys","piano","pic","pick","picked","picks","pickup","picnic","pics","pie","piece","pieces","pierce","pierre","pig","pike","pill","pillow","pills","pilot","pin","pine","ping","pink","pins","pipe","pipes","piss","pit","pitch","pix","pixel","pixels","pizza","place","placed","places","plain","plains","plan","plane","planes","planet","plans","plant","plants","plasma","plate","plates","play","played","player","plays","plaza","plc","please","pledge","plenty","plot","plots","plug","plugin","plus","pmc","pmid","pocket","pod","poem","poems","poet","poetry","point","points","poker","poland","polar","pole","police","policy","polish","poll","polls","polo","poly","pond","pool","pools","poor","pop","pope","por","pork","porn","porno","port","portal","porter","ports","pos","pose","posing","post","postal","posted","poster","posts","pot","potato","potter","pound","pounds","pour","powder","powell","power","powers","ppc","ppm","prague","praise","pray","prayer","pre","prefer","prefix","prep","press","pretty","prev","price","priced","prices","pride","priest","prime","prince","print","prints","prior","prison","prix","prize","prizes","pro","probe","proc","prof","profit","promo","prompt","proof","proper","pros","prot","proud","prove","proved","proven","proxy","prozac","psi","psp","pst","pts","pty","pub","public","pubmed","pubs","puerto","pull","pulled","pulse","pump","pumps","punch","punk","pupils","puppy","pure","purple","purse","pursue","push","pushed","pussy","put","puts","puzzle","pvc","python"];

const randomWords_q = ["qatar","qld","qty","quad","que","quebec","queen","queens","query","quest","queue","qui","quick","quiet","quilt","quit","quite","quiz","quote","quoted","quotes"];

const randomWords_r = ["rabbit","race","races","rachel","racial","racing","rack","racks","radar","radio","radios","radius","rage","raid","rail","rain","raise","raised","raises","rally","ralph","ram","ran","ranch","rand","random","randy","range","ranges","rank","ranked","ranks","rap","rape","rapid","rapids","rare","rarely","rat","rate","rated","rates","rather","rating","ratio","ratios","rats","raw","ray","rays","rca","reach","read","reader","reads","ready","real","really","realm","realty","rear","reason","rebate","rebel","rec","recall","recent","recipe","record","red","redeem","reduce","reed","reef","reel","ref","refer","refers","refine","reform","refund","refuse","reg","regard","reggae","regime","region","rehab","reid","reject","rel","relate","relax","relay","relief","reload","rely","remain","remark","remedy","remind","remix","remote","remove","render","renew","reno","rent","rental","rep","repair","repeat","reply","report","res","rescue","reset","resist","resort","rest","result","resume","retail","retain","retro","return","rev","reveal","review","reward","rfc","rhode","rhythm","ribbon","rica","rice","rich","rick","rico","rid","ride","rider","riders","rides","ridge","riding","right","rights","rim","ring","rings","rio","rip","ripe","rise","rising","risk","risks","river","rivers","rna","road","roads","rob","robert","robin","robot","robots","robust","rock","rocket","rocks","rocky","rod","roger","rogers","roland","role","roles","roll","rolled","roller","rolls","rom","roman","rome","ron","ronald","roof","room","rooms","root","roots","rope","rosa","rose","roses","ross","roster","rotary","rouge","rough","round","rounds","route","router","routes","rover","row","rows","roy","royal","rpg","rpm","rrp","rss","rubber","ruby","rug","rugby","rugs","rule","ruled","rules","ruling","run","runner","runs","rural","rush","russia","ruth","rwanda","ryan"];

const randomWords_s1 = ["sie","sierra","sig","sight","sigma","sign","signal","signed","signs","signup","silent","silk","silly","silver","sim","simon","simple","simply","sims","sin","since","sing","singer","singh","single","sink","sip","sir","sister","sit","site","sites","six","sixth","size","sized","sizes","ski","skiing","skill","skills","skin","skins","skip","skirt","skirts","sku","sky","skype","slave","sleep","sleeps","sleeve","slide","slides","slight","slim","slip","slope","slot","slots","slovak","slow","slowly","slut","sluts","small","smart","smell","smile","smith","smoke","smooth","sms","smtp","snake","snap","snow","soa","soap","soc","soccer","social","socket","socks","sodium","sofa","soft","soil","sol","solar","sold","sole","solely","solid","solo","solve","solved","soma","some","son","song","songs","sonic","sons","sony","soon","sorry","sort","sorted","sorts","sought","soul","souls","sound","sounds","soup","source","south","soviet","sox","spa","space","spaces","spain","spam","span","spank","sparc","spare","spas","speak","speaks","spears","spec","specs","speech","speed","speeds","spell","spend","spent","sperm","sphere","spice","spider","spies","spin","spine","spirit","split","spoke","spoken","sport","sports","spot","spots","spouse","spray","spread","spring","sprint","spy","sql","squad","square","squirt","src","sri","ssl","stable","stack","staff","stage","stages","stamp","stamps","stan","stand","stands","star","stars","start","starts","stat","state","stated","states","static","stats","status","stay","stayed","stays","std","ste","steady","steal","steam","steel","stem","step","steps","stereo","steve","steven","stick","sticks","sticky","still","stock","stocks","stolen","stone","stones","stood","stop","stops","store","stored","stores","storm","story","str","strain","strand","strap","stream","street","stress","strict","strike","string","strip","strips","stroke","strong","struck","struct","stuart","stuck","stud","studio","study","stuff","stupid","style","styles","stylus","sub","subaru","submit","subtle","such","suck","sucks","sudan","sudden","sue","suffer","sugar","suit","suite","suited","suites","suits","sum","summer","summit","sun","sunday","sunny","sunset","super","superb","supply","sur","sure","surely","surf","surge","surrey","survey","susan","suse","sussex","suzuki","swap","sweden","sweet","swift","swim","swing","swiss","switch","sword","sydney","symbol","sync","syntax","syria","sys","system"];

const randomWords_s2 = ["sacred","sad","saddam","safari","safe","safely","safer","safety","sage","sagem","said","sail","saint","saints","sake","salad","salary","sale","salem","sales","sally","salmon","salon","salt","sam","samba","same","samoa","sample","samuel","san","sand","sandra","sandy","sans","santa","sanyo","sao","sap","sara","sarah","sas","sat","satin","saturn","sauce","saudi","savage","save","saved","saver","saves","saving","saw","say","saying","says","sbjct","scale","scales","scan","scary","scene","scenes","scenic","schema","scheme","school","sci","scoop","scope","score","scored","scores","scotia","scott","scout","screen","screw","script","scroll","scsi","scuba","sea","seal","sealed","sean","search","seas","season","seat","seats","sec","second","secret","sector","secure","see","seed","seeds","seeing","seek","seeker","seeks","seem","seemed","seems","seen","sees","sega","select","self","sell","seller","sells","semi","sen","senate","send","sender","sends","senior","sense","sensor","sent","seo","sep","sept","seq","ser","serbia","serial","series","serum","serve","served","server","serves","set","sets","settle","setup","seven","severe","sewing","sex","sexcam","sexo","sexual","sexy","shade","shades","shadow","shaft","shake","shall","shame","shape","shaped","shapes","share","shared","shares","shark","sharon","sharp","shaved","shaw","she","shed","sheep","sheer","sheet","sheets","shelf","shell","shield","shift","shine","ship","ships","shirt","shirts","shit","shock","shoe","shoes","shoot","shop","shops","shore","short","shorts","shot","shots","should","show","showed","shower","shown","shows","shut","sic","sick","side","sides"];

const randomWords_t = ["tab","table","tables","tablet","tabs","tackle","tag","tagged","tags","tahoe","tail","taiwan","take","taken","takes","taking","tale","talent","tales","talk","talked","talks","tall","tamil","tampa","tan","tank","tanks","tap","tape","tapes","tar","target","tariff","task","tasks","taste","tattoo","taught","tax","taxes","taxi","taylor","tba","tcp","tea","teach","team","teams","tear","tears","tech","techno","ted","teddy","tee","teen","teens","teeth","tel","tell","tells","temp","temple","ten","tenant","tend","tender","tennis","tent","term","terms","terror","terry","test","tested","tests","tex","texas","text","texts","tft","tgp","thai","than","thank","thanks","that","thats","the","thee","theft","thehun","their","them","theme","themes","then","theory","there","these","thesis","they","thick","thin","thing","things","think","thinks","third","thirty","this","thomas","thong","thongs","those","thou","though","thread","threat","three","throat","throw","thrown","throws","thru","thu","thumb","thumbs","thus","thy","ticket","tide","tie","tied","tier","ties","tiger","tigers","tight","til","tile","tiles","till","tim","timber","time","timely","timer","times","timing","tin","tiny","tion","tions","tip","tips","tire","tired","tires","tissue","tit","titans","title","titled","titles","tits","titten","tmp","tobago","today","todd","toe","toilet","token","tokyo","told","toll","tom","tomato","tommy","ton","tone","toner","tones","tongue","tons","tony","too","took","tool","tools","tooth","top","topic","topics","tops","total","totals","touch","tough","tour","tours","toward","tower","towers","town","towns","toxic","toy","toyota","toys","trace","track","tracks","tract","tracy","trade","trader","trades","trail","trails","train","trains","trance","tranny","trans","trap","trash","trauma","travel","travis","tray","treat","treaty","tree","trees","trek","trembl","trend","trends","treo","tri","trial","trials","tribal","tribe","tribes","trick","tricks","tried","tries","trim","trio","trip","triple","trips","trivia","troops","trout","troy","truck","trucks","true","truly","trunk","trust","trusts","truth","try","trying","tub","tube","tubes","tucson","tue","tulsa","tumor","tune","tuner","tunes","tuning","tunnel","turbo","turkey","turn","turned","turner","turns","turtle","tvcom","tvs","twelve","twenty","twice","twiki","twin","twinks","twins","twist","two","tyler","type","types","typing"];

const randomWords_u = ["uganda","ugly","ultra","ultram","una","unable","uncle","und","under","undo","une","uni","union","unions","unique","unit","united","units","unity","univ","unix","unless","unlike","unlock","until","unto","unwrap","upc","update","upload","upon","upper","ups","upset","urban","urge","urgent","uri","url","urls","urw","usa","usage","usb","usc","usd","usda","use","used","useful","user","users","uses","usgs","using","usps","usr","usual","utah","utc","utils"];

const randomWords_v = ["vacuum","vagina","val","valid","valium","valley","value","valued","values","valve","valves","van","var","varied","varies","vary","vast","vat","vault","vcr","vector","vegas","velvet","vendor","venice","venue","venues","ver","verbal","verde","verify","vernon","verse","versus","vertex","very","vessel","vhs","via","viagra","vic","vice","victim","victor","vid","video","videos","vids","vienna","view","viewed","viewer","views","vii","viii","viking","villa","villas","vinyl","violin","vip","viral","virgin","virtue","virus","visa","vision","visit","visits","vista","visual","vital","vocal","vocals","voice","voices","void","voip","vol","volt","volume","volvo","von","vote","voted","voters","votes","voting","voyeur","voyuer","vpn","vsnet"];

const randomWords_w = ["wage","wages","wagner","wagon","wait","waiver","wake","wal","wales","walk","walked","walker","walks","wall","wallet","walls","walnut","walt","walter","wan","wang","wanna","want","wanted","wants","war","ward","ware","warm","warned","warner","warren","wars","was","wash","washer","waste","watch","water","waters","watson","watt","watts","wav","wave","waves","wax","way","wayne","ways","weak","wealth","weapon","wear","web","webcam","weblog","wed","weed","week","weekly","weeks","weight","weird","well","wells","welsh","wendy","went","were","wesley","west","wet","whale","what","whats","wheat","wheel","wheels","when","where","which","while","whilst","white","who","whole","whom","whore","whose","why","wicked","wide","widely","wider","width","wife","wifi","wiki","wild","wiley","will","willow","wilson","win","wind","window","winds","wine","wines","wing","wings","winner","wins","winter","wire","wired","wires","wiring","wisdom","wise","wish","wishes","wit","witch","with","within","wives","wizard","wma","wolf","woman","women","womens","won","wonder","wood","wooden","woods","wool","word","words","work","worked","worker","works","world","worlds","worm","worn","worry","worse","worst","worth","worthy","would","wound","wow","wrap","wright","wrist","write","writer","writes","wrong","wrote"];


function allRandomWords(){
    return randomWords_a.concat(randomWords_b, randomWords_c, randomWords_d, randomWords_e, randomWords_f, randomWords_g, randomWords_h, randomWords_i, randomWords_j, randomWords_k, randomWords_l, randomWords_m, randomWords_n, randomWords_o, randomWords_p, randomWords_q, randomWords_r, randomWords_s1, randomWords_s2, randomWords_t, randomWords_u, randomWords_v, randomWords_w);
}

let allrandomWords = [];

let gameBoard = [["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]];
let gameBoardTopDown = [["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]];

let shiftRowPos = 0;
let shiftColPos = 0;
let shiftAlphabet = "";

let activeRandomWord = [];


/**
 * start a new empty game board
 * link keydown and game control clicks
 */
function startNewGame(){
    if(allrandomWords.length <= 0){
        allrandomWords = allRandomWords();
    }
    document.addEventListener("keydown", (e) => gameKeyDown(e));
    linkClickToControls();
    createEmptyBoard();
}

/**
 * start a new random filled game board
 * link keydown and game control clicks
 */
function startNewGameBoard(){
    document.addEventListener("keydown", (e) => gameKeyDown(e));
    linkClickToControls();
    createEmptyBoard();
}

/**
 * link click event to game controls left, up, down, right
 */
function linkClickToControls(){
    const left = document.getElementById("shift-left-button");
    const up = document.getElementById("shift-up-button");
    const down = document.getElementById("shift-down-button");
    const right = document.getElementById("shift-right-button");

    left.addEventListener("click", () => shiftLeft());  
    up.addEventListener("click", () => shiftUp());  
    down.addEventListener("click", () => shiftDown());  
    right.addEventListener("click", () => shiftRight()); 
}

/**
 * checks for key down and assigns respective function to it
 * @param {*} e Keyboard events
 */
function gameKeyDown(e){
    e.preventDefault();
    if(e.key == "ArrowLeft"){
        shiftLeft();
    } else if(e.key === "ArrowRight"){
        shiftRight();
    } else if(e.key === "ArrowDown"){
        shiftDown();
    } else if(e.key === "ArrowUp"){
        shiftUp();
    }
}

function shiftLeft(){
    let shift = shiftColPos - 1;
    if(isCellFree(shiftRowPos, shift)){
        deleteFromGameBoard(shiftRowPos, shiftColPos);
        writeToGameBoard(shiftRowPos, shift, shiftAlphabet);
        shiftColPos--;
    }else if(isCellFree(shiftRowPos + 1, shift + 1)){
        //shiftDown();
    }else{

    }

}

function shiftUp(){
    let shift = shiftRowPos - 1;
    if(isCellFree(shift, shiftColPos)){
        deleteFromGameBoard(shiftRowPos, shiftColPos);
        writeToGameBoard(shift, shiftColPos, shiftAlphabet);
        shiftRowPos--;
    }else{

    }
    
}

function shiftDown(){
    let shift = shiftRowPos + 1;
    if(isCellFree(shift, shiftColPos)){
        deleteFromGameBoard(shiftRowPos, shiftColPos);
        writeToGameBoard(shift, shiftColPos, shiftAlphabet);
        shiftRowPos++;
    }else{
        //check for words in row
        newAlphabetAtTopRow();
    }
}

function shiftRight(){
    let shift = shiftColPos + 1;
        if(isCellFree(shiftRowPos, shift)){
            deleteFromGameBoard(shiftRowPos, shiftColPos);
            writeToGameBoard(shiftRowPos, shift, shiftAlphabet);
            shiftColPos++;
        }else if(isCellFree(shiftRowPos + 1, shift - 1)){
            //shiftDown();
        }else{
    
        }

    
}

function isCellFree(rowPos, colPos){
    if(colPos < 0 || colPos > 5 || rowPos > 5){
        return false;
    }
    let cell = gameBoard[rowPos][colPos];
    if(cell.length > 0){
        return false;
    } else{
        return true;
    }
}


function createEmptyBoard(){
    const gameContainer = document.getElementById("gameContainer");
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;
    const containerW = containerWidth <= containerHeight ? containerWidth : containerHeight;
    gameContainer.style.height = containerW;
    gameContainer.style.width = containerW;
    console.log(containerWidth/6);
    while (gameContainer.hasChildNodes()) {
        gameContainer.removeChild(gameContainer.firstChild);
      }      
      let k = 0;
      for (let i = 0; i < 6; i++){        
          const rowDiv = document.createElement("div");
          rowDiv.className = "row";
              for (let j = 0; j < 6; j++){
                  const colDiv = document.createElement("div");
                  colDiv.classList.add("col-" + i + "-" + j);
                  colDiv.classList.add("col");
                  colDiv.addEventListener("click", (e) => cellDivSelected(e));
                  const cellP = document.createElement("p");
                  cellP.innerText = "";
                  cellP.classList.add("cell-" + i + "-" + j);
                  colDiv.appendChild(cellP);    
                  colDiv.style.left = j * (containerW / 6) + "px";
                  colDiv.style.top = i *(containerW / 6) + "px";
                  colDiv.style.width = (containerW / 6) + "px";
                  colDiv.style.height = (containerW / 6) + "px";
                  colDiv.classList.add("gameBoard-col");               
                  rowDiv.appendChild(colDiv);   
              }
              gameContainer.appendChild(rowDiv);
          }
        shiftRowPos = 0;
        shiftColPos = 0;
        shiftAlphabet = "";
        activeRandomWord = [];
        newAlphabetAtTopRow();
}

function cellDivSelected(e){
    const selectedElement = e.srcElement;
    let cellP = e.srcElement;
    let colDiv = cellP.parentElement;
    if(selectedElement.tagName.toLowerCase() === "div"){
        colDiv = selectedElement;
        cellP = selectedElement.firstChild;
    }
    if(cellP){
        console.log(cellP);
    }
}

function writeToGameBoard(rowPos, colPos, alphabet){
    gameBoard[rowPos][colPos] = alphabet;
    gameBoardTopDown[colPos][rowPos] = alphabet; 
    let cells = document.getElementsByClassName("cell-" + rowPos + "-" + colPos);
    cells[0].innerText = gameBoard[rowPos][colPos];
    cells[0].parentElement.classList.add("active-col"); 
    cells[0].classList.add("active-cell");
}

function deleteFromGameBoard(rowPos, colPos){
    gameBoard[rowPos][colPos] = "";
    gameBoardTopDown[colPos][rowPos] = ""; 
    let cells = document.getElementsByClassName("cell-" + rowPos + "-" + colPos);
    cells[0].innerText = "";
    cells[0].classList.remove("active-cell");   
    cells[0].parentElement.classList.remove("active-col"); 
}


function getRandomAlphabet(){
    if(activeRandomWord.length <= 0){
        let len = allrandomWords.length;
        let i = Math.floor(Math.random() * len);
        let word = allrandomWords[i];
        console.log(allrandomWords[i]);
        activeRandomWord = word.split("");
    }
    if(activeRandomWord.length > 0){
        let cell = document.getElementById("game-Hint");
        cell.innerText = "HINT : " + activeRandomWord.join("");   
        let len = activeRandomWord.length;
        let i = Math.floor(Math.random() * len);
        let alphabet = activeRandomWord[i];
        delete activeRandomWord[i];
        let word = activeRandomWord.join("");
        activeRandomWord = word.split("");
        return alphabet;
    }
    else{
        console.log("error");
        let alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        let i = Math.floor(Math.random() * 26);
        return alphabets[i];
    }
  }

  
function newAlphabetAtTopRow(){
    shiftRowPos = 0;
    shiftAlphabet = getRandomAlphabet();
    for(let i=0; i< 6; i++){
        if(gameBoard[0][i].length <= 0){
            shiftColPos = i;
            writeToGameBoard(shiftRowPos, shiftColPos, shiftAlphabet);
            return;
        }
    }
    alert(" Game Over! ");
}

function checkBoardForWords(rowPos, colPos){

}