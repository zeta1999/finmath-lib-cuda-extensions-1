var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":1408,"id":2389,"methods":[{"el":174,"sc":2,"sl":106},{"el":185,"sc":2,"sl":176},{"el":194,"sc":2,"sl":192},{"el":208,"sc":2,"sl":202},{"el":222,"sc":2,"sl":216},{"el":232,"sc":2,"sl":230},{"el":237,"sc":2,"sl":234},{"el":251,"sc":2,"sl":239},{"el":264,"sc":2,"sl":259},{"el":273,"sc":2,"sl":266},{"el":282,"sc":2,"sl":276},{"el":290,"sc":2,"sl":284},{"el":307,"sc":2,"sl":292},{"el":312,"sc":2,"sl":309},{"el":317,"sc":2,"sl":314},{"el":326,"sc":2,"sl":319},{"el":335,"sc":2,"sl":328},{"el":347,"sc":2,"sl":337},{"el":359,"sc":2,"sl":349},{"el":371,"sc":2,"sl":361},{"el":390,"sc":2,"sl":373},{"el":406,"sc":2,"sl":395},{"el":432,"sc":2,"sl":408},{"el":444,"sc":2,"sl":434},{"el":456,"sc":2,"sl":446},{"el":468,"sc":2,"sl":458},{"el":480,"sc":2,"sl":470},{"el":492,"sc":2,"sl":482},{"el":512,"sc":2,"sl":494},{"el":524,"sc":2,"sl":514},{"el":554,"sc":2,"sl":526},{"el":600,"sc":2,"sl":556},{"el":624,"sc":2,"sl":602},{"el":629,"sc":2,"sl":626},{"el":641,"sc":2,"sl":631},{"el":657,"sc":2,"sl":643},{"el":668,"sc":2,"sl":659},{"el":684,"sc":2,"sl":670},{"el":689,"sc":2,"sl":686},{"el":694,"sc":2,"sl":691},{"el":712,"sc":2,"sl":696},{"el":733,"sc":2,"sl":717},{"el":751,"sc":2,"sl":735},{"el":769,"sc":2,"sl":753},{"el":787,"sc":2,"sl":771},{"el":804,"sc":2,"sl":789},{"el":821,"sc":2,"sl":806},{"el":831,"sc":2,"sl":823},{"el":848,"sc":2,"sl":833},{"el":868,"sc":2,"sl":853},{"el":885,"sc":2,"sl":870},{"el":901,"sc":2,"sl":887},{"el":917,"sc":2,"sl":903},{"el":940,"sc":2,"sl":919},{"el":971,"sc":2,"sl":945},{"el":1002,"sc":2,"sl":976},{"el":1033,"sc":2,"sl":1007},{"el":1050,"sc":2,"sl":1035},{"el":1067,"sc":2,"sl":1052},{"el":1090,"sc":2,"sl":1069},{"el":1113,"sc":2,"sl":1092},{"el":1142,"sc":2,"sl":1116},{"el":1174,"sc":2,"sl":1144},{"el":1180,"sc":2,"sl":1176},{"el":1186,"sc":2,"sl":1182},{"el":1192,"sc":2,"sl":1188},{"el":1198,"sc":2,"sl":1194},{"el":1204,"sc":2,"sl":1200},{"el":1210,"sc":2,"sl":1206},{"el":1216,"sc":2,"sl":1212},{"el":1225,"sc":2,"sl":1221},{"el":1234,"sc":2,"sl":1230},{"el":1243,"sc":2,"sl":1239},{"el":1252,"sc":2,"sl":1248},{"el":1258,"sc":2,"sl":1254},{"el":1274,"sc":2,"sl":1264},{"el":1288,"sc":2,"sl":1276},{"el":1299,"sc":2,"sl":1290},{"el":1319,"sc":2,"sl":1301},{"el":1383,"sc":2,"sl":1331},{"el":1407,"sc":2,"sl":1392}],"name":"RandomVariableCudaWithFinalizer","sl":60}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]